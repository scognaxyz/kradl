from sqlalchemy import Column, Integer, String, ForeignKey

from sqlalchemy.orm import relationship

from database import Base


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key = True)
    header = Column(String)
    rules = Column(String)
    pic = Column(String)
    description = Column(String)
    address = Column(String)
    address_contest = Column(String)
    address_factory = Column(String)

    nfts = relationship("Nft", back_populates = "project")

class Nft(Base):
    __tablename__ = "nfts"

    id = Column(Integer , primary_key = True)
    title  = Column(String)
    image  = Column(String)
    description = Column(String)
    project_id = Column(Integer, ForeignKey("projects.id"))

    project = relationship("Project", back_populates= "nfts")



