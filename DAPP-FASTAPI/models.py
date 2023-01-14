from sqlalchemy import Column, Integer, String, Boolean

from sqlalchemy.orm import relationship

from database import Base


class Carta(Base):
    __tablename__ = "projects"

    id = Column(Integer , primary_key = True)
    header = Column(String)
    rules = Column(String)
    pic = Column(String)
    description = Column(String)
    address = Column(String)