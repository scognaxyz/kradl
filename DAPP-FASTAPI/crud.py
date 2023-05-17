from sqlalchemy.orm import Session
import models, schemas
from fastapi import File,UploadFile
import boto3
import requests

JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmYjIwNGQ2MS0zM2NlLTRjYTktODU5YS0wNTZlOTlhN2I2MDciLCJlbWFpbCI6InNjb2duYW1pZ2xpb2ZyYW5jZXNjbzE5OTZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjhkNjE3YzgzMGU0ZDE1OWZiZTZlIiwic2NvcGVkS2V5U2VjcmV0IjoiOTFiYTMxN2ZjMjEwNTQ3ZWE4MzMxMjc1MzliYWRkOWE4ZTUwNmZlZmFlNTc2Nzc3MzMyOTJlZjEyYzE0YzI0YyIsImlhdCI6MTY3Mzg1ODY3OH0.6ihszihFBtXX3-xcN6XCzpW_uvbPC9x0vdYdD8Yy8jU'

def create_project(db: Session, project: schemas.ToDoRequestProject):
    db_projects = models.Project( header= project.header, rules= project.rules,pic=project.pic , description= project.description, address= project.address, address_contest= project.address_contest, address_factory= project.address_factory)
    db.add(db_projects)
    db.commit()
    db.refresh(db_projects)
    return db_projects

def read_projects(db: Session): 
        return db.query(models.Project).all()

def read_project_by_address_contest(db: Session, address_contest: str):
     return db.query(models.Project).filter(models.Project.address_contest == address_contest).first()

def create_nft(db: Session, nft:schemas.ToDoRequestNft):
    db_nft = models.Nft(title = nft.title, image = nft.image, description= nft.description)
    db.add(db_nft)
    db.commit()
    db.refresh(db_nft)
    return db_nft

def read_nfts(db: Session): 
        return db.query(models.Nft).all()


# def read_project(db: Session, id: int):
#     return db.query(models.Carta).filter(models.Carta.id == id).first()

# def update_project(db: Session, id: int, project: schemas.ToDoRequestProject):
#     db_projects = db.query(models.Carta).filter(models.Carta.id == id).first()
#     if db_projects is None:
#         return None
#     db.query(models.Carta).filter(models.Carta.id == id).update({'name': project.name})
#     db.commit()
#     db.refresh(db_projects)
#     return db_projects

# def delete_project(db: Session, id: int):
#     db_projects = db.query(models.Carta).filter(models.Carta.id == id).first()
#     if db_projects is None:
#         return None
#     db.query(models.Carta).filter(models.Carta.id == id).delete()
#     db.commit()
#     return True