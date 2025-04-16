from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from supabase import create_client, Client

# Configuración de Supabase
SUPABASE_URL = "https://ptllkoytbciishtpimtj.supabase.co"  # URL del proyecto
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0bGxrb3l0YmNpaXNodHBpbXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MzM5NjgsImV4cCI6MjA2MDAwOTk2OH0.UGI_BrCl29dP9D9q7Q-9HW-tukdQ9EtImwfJeEnRb6I"  # Clave service_role
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