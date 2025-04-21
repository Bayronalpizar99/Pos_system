from pydantic import BaseModel

class LoginRequest(BaseModel):
    id_usuario: str
    password: str