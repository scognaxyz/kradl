from typing import List
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, status, File,UploadFile,Form
import schemas
import crud
from database import SessionLocal
import boto3

S3_BUCKET_NAME = "image-kradl"

router = APIRouter(
    prefix="/projects"
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("", status_code=status.HTTP_201_CREATED)
def create_projects(pic: UploadFile = File (...), rules: str = Form() ,description: str = Form(),address: str = Form(), address_contest: str = Form(), address_factory: str = Form(), header: str = Form(), db: Session = Depends(get_db)):
    s3 = boto3.resource("s3")
    bucket = s3.Bucket(S3_BUCKET_NAME)
    bucket.upload_fileobj(pic.file,pic.filename)
    uploaded_pic_url= f"https://{S3_BUCKET_NAME}.s3.amazonaws.com/{pic.filename}"

    project = schemas.ToDoRequestProject(pic = uploaded_pic_url, header = header, address = address, description = description,rules = rules,  address_contest =  address_contest, address_factory = address_factory)
    project = crud.create_project(db, project)
    return project

@router.post("/add-image", status_code=status.HTTP_201_CREATED)
def add_image(image: UploadFile = File(), title: str = Form(), description: str = Form(), db: Session = Depends(get_db)):
    s3 = boto3.resource("s3")
    bucket = s3.Bucket(S3_BUCKET_NAME)
    bucket.upload_fileobj(image.file,title)
    uploaded_image_url= f"https://{S3_BUCKET_NAME}.s3.amazonaws.com/{title}"

    nft = schemas.ToDoRequestNft(title = title, image = uploaded_image_url, description = description)
    nft = crud.create_nft(db,nft)
    return nft

@router.get("", response_model=List[schemas.ToDoResponseProject])
def get_projects(db: Session = Depends(get_db)):
    projects = crud.read_projects(db)
    return projects

@router.get("/{address_contest}")
def get_project_by_address_contest(address_contest: str, db: Session = Depends(get_db)):
    project = crud.read_project_by_address_contest(db, address_contest)
    if project is None:
        raise HTTPException(status_code=404, detail="to do not found")
    return project

@router.get("/nfts", response_model=List[schemas.ToDoResponseNft])
def get_nfts(db: Session = Depends(get_db)):
    nft = crud.read_nfts(db)
    return nft

# @router.get("/{id}")
# def get_project_by_id(id: int, db: Session = Depends(get_db)):
#     project = crud.read_project(db, id)
#     if project is None:
#         raise HTTPException(status_code=404, detail="to do not found")
#     return project

# @router.put("/{id}")
# def update_project(id: int, project: schemas.ToDoRequest, db: Session = Depends(get_db)):
#     project = crud.update_project(db, id, project)
#     if project is None:
#         raise HTTPException(status_code=404, detail="to do not found")
#     return project

# @router.delete("/{id}", status_code=status.HTTP_200_OK)
# def delete_project(id: int, db: Session = Depends(get_db)):
#     res = crud.delete_project(db, id)
#     if res is None:
#         raise HTTPException(status_code=404, detail="to do not found")