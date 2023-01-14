from pydantic import BaseSettings


class Settings(BaseSettings):
    app_name: str = "DAPP-FASTAPI"

    class Config:
        env_file = ".env"