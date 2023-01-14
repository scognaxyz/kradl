from typing import List
from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, status, File,UploadFile
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
def create_projects(project: schemas.ToDoRequest, db: Session = Depends(get_db), file: UploadFile= File (...)):
    # print("fuck")
    print(file.filename)
    # s3 = boto3.resource("s3")
    # bucket = s3.Bucket(S3_BUCKET_NAME)
    # bucket.upload_fileobj(file.file,file.filename, ExtraArgs= {"ACL": "public-read"})
    uploaded_file_url= f"https://{S3_BUCKET_NAME}.s3.amazonaws.com/{file.filename}"
    project = crud.create_project(db, project, uploaded_file_url)
    return project

@router.get("", response_model=List[schemas.ToDoResponse])
def get_projects(db: Session = Depends(get_db)):
    projects = crud.read_projects(db)
    return projects

@router.get("/{id}")
def get_project_by_id(id: int, db: Session = Depends(get_db)):
    project = crud.read_project(db, id)
    if project is None:
        raise HTTPException(status_code=404, detail="to do not found")
    return project

@router.put("/{id}")
def update_project(id: int, project: schemas.ToDoRequest, db: Session = Depends(get_db)):
    project = crud.update_project(db, id, project)
    if project is None:
        raise HTTPException(status_code=404, detail="to do not found")
    return project

@router.delete("/{id}", status_code=status.HTTP_200_OK)
def delete_project(id: int, db: Session = Depends(get_db)):
    res = crud.delete_project(db, id)
    if res is None:
        raise HTTPException(status_code=404, detail="to do not found")