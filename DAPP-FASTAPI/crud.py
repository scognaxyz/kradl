from sqlalchemy.orm import Session
import models, schemas
from fastapi import File,UploadFile
import boto3

S3_BUCKET_NAME = "image-kradl"
def create_project(db: Session, project: schemas.ToDoRequest, uploaded_file_url):
    db_projects = models.Carta( header= project.header, rules= project.rules, pic= uploaded_file_url, description= project.description, address= project.address)
    db.add(db_projects)
    db.commit()
    db.refresh(db_projects)
    return db_projects

def read_projects(db: Session): 
        return db.query(models.Carta).all()

def read_project(db: Session, id: int):
    return db.query(models.Carta).filter(models.Carta.id == id).first()

def update_project(db: Session, id: int, project: schemas.ToDoRequest):
    db_projects = db.query(models.Carta).filter(models.Carta.id == id).first()
    if db_projects is None:
        return None
    db.query(models.Carta).filter(models.Carta.id == id).update({'name': project.name})
    db.commit()
    db.refresh(db_projects)
    return db_projects

def delete_project(db: Session, id: int):
    db_projects = db.query(models.Carta).filter(models.Carta.id == id).first()
    if db_projects is None:
        return None
    db.query(models.Carta).filter(models.Carta.id == id).delete()
    db.commit()
    return True