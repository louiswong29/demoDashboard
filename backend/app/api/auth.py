from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/login")
def login(req: LoginRequest):
    if req.email == "demo@example.com" and req.password == "demo123":
        return {"token": "demo-token", "user": {"email": req.email}}
    raise HTTPException(status_code=401, detail="Invalid credentials")
