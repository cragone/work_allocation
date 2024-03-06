import os 
import pandas as pd
from dotenv import load_dotenv
from sqlalchemy import create_engine

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
    
    return engine

def get_assignment_name():
    
    engine = data_engine()

    query = "SELECT title FROM work_instance WHERE completed = FALSE"

    df = pd.read_sql_query(query, engine)

    engine.dispose()

    return df

def get_assigment_due_date():

    engine = data_engine()

    query = "SELECT original_deadline FROM work_instance WHERE completed = FALSE"

    df = pd.read_sql_query(query, engine)

    engine.dispose()

    return df

assignments = get_assignment_name()
due_date = get_assigment_due_date()

print(assignments, due_date)

