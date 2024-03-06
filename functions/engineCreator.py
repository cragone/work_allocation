import os 
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

load_dotenv()


#function that creates the engine
def data_engine():
      # Get environment variables
    database = os.environ["DB_NAME"]
    host = os.environ["DB_HOST"]
    user = os.environ["DB_USER"]
    port = os.environ["DB_PORT"]
    pw = os.environ["PGPASSWORD"]
    
    # Construct the database URI
    db_uri = f"postgresql://{user}:{pw}@{host}:{port}/{database}"
    
    # Create the engine
    engine = create_engine(db_uri)

    #return the engine for use
    return engine


def create_session(engine):
    Session = sessionmaker(bind=engine)
    return Session

    