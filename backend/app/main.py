from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import auth, projects
import uvicorn, os

app = FastAPI(title="Business Dashboard Demo")

origins = ["*"]  # adjust later for security
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["Auth"])
app.include_router(projects.router, prefix="/api/projects", tags=["Projects"])

@app.get("/")
def root():
    return {"message": "Backend is running"}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))  # Render will inject PORT
    uvicorn.run("app.main:app", host="0.0.0.0", port=port, reload=False)


