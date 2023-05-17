from pydantic import BaseModel

class ToDoRequestNft(BaseModel):
    title: str
    image: str
    description: str

class ToDoResponseNft(BaseModel):
    id: int
    title: str
    image: str
    description: str

    class Config:
        orm_mode = True #to serialize our database enteties

class ToDoRequestProject(BaseModel):
    header: str
    rules: str
    pic: str
    description: str
    address: str
    address_contest: str
    address_factory: str

class ToDoResponseProject(BaseModel):
    id: int
    header: str
    rules: str
    pic: str
    description: str
    address: str
    address_contest: str
    address_factory: str

    class Config:
        orm_mode = True #to serialize our database enteties