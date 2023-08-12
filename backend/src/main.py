
import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

if __name__ == '__main__':

    app = FastAPI()
    
    app.mount("/", StaticFiles(directory="../public", html=True), name="public")

    uvicorn.run(app)