from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from supabase import create_client, Client
import os
from dotenv import load_dotenv

# Cargar variables de entorno desde .env
load_dotenv()

# Configuración de Supabase
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Inicializar FastAPI
app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo para las credenciales de inicio de sesión
class LoginRequest(BaseModel):
    id_usuario: str
    password: str

@app.post("/login")
async def login(request: LoginRequest):
    print("Intento de login con:", request)
    # Consulta a la tabla "Personas" para verificar las credenciales
    response = supabase.table("personas").select("*").eq("cedula", request.id_usuario).eq("contraseña", request.password).execute()
    print("Respuesta de Supabase:", response)
    
    if response.data:
        user = response.data[0]
        return {
            "success": True,
            "message": "Inicio de sesión exitoso",
            "usuario": user["nombre"]
        }
    else:
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")