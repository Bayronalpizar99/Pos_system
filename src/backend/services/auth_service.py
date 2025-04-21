from pydantic import BaseModel
from supabase import create_client, Client
import os
from dotenv import load_dotenv
from fastapi import HTTPException

# Cargar variables de entorno desde .env
load_dotenv()

# Configuración de Supabase
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

class LoginRequest(BaseModel):
    id_usuario: str
    password: str

def authenticate_user(id_usuario: str, password: str):
    # Consulta a la tabla "Personas" para verificar las credenciales
    response = supabase.table("personas").select("*").eq("cedula", id_usuario).eq("contraseña", password).execute()
    if response.data:
        return response.data[0]  # Retorna el usuario si las credenciales son correctas
    else:
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")