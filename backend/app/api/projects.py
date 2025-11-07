from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_projects():
    return [
        {"id": 1, "name": "Website Redesign", "status": "Active"},
        {"id": 2, "name": "Marketing Dashboard", "status": "Completed"}
    ]
