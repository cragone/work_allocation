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

def get_data_from_database():
    
    engine = data_engine()
    
    query = "SELECT * FROM work_instance"
    
    df = pd.read_sql_query(query, engine)
    
    #closes the engine
    engine.dispose()
    
    return df

data = get_data_from_database()

print(data)