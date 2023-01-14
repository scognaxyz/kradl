from pydantic import BaseModel


class ToDoRequest(BaseModel):
    header: str
    rules: str
    description: str
    address: str

class ToDoResponse(BaseModel):
    id: int
    header: str
    rules: str
    pic: str
    description: str
    address: str

    class Config:
        orm_mode = True #to serialize our database enteties