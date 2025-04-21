from fastapi import APIRouter
from models.auth_model import LoginRequest
from services.auth_service import authenticate_user

router = APIRouter()

@router.post("/login")
async def login(request: LoginRequest):
    user = authenticate_user(request.id_usuario, request.password)
    return {
        "success": True,
        "message": "Inicio de sesión exitoso",
        "usuario": user["nombre"]
    }