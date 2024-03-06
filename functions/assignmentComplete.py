from dotenv import load_dotenv
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
import os

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

def create_session(engine):
    Session = sessionmaker(bind=engine)
    return Session


def post_hours(title, hours):
    engine = data_engine()
    Session = create_session(engine)
    session = Session()
    try:
        # Check if the title exists in the database
        result = session.execute(text("SELECT COUNT(*) FROM work_instance WHERE title=:title"), {'title': title})
        count = result.scalar()
        if count == 0:
            return {"message": "Title not found in the database"}, 404

        # Execute the UPDATE statement
        result = session.execute(text("UPDATE work_instance SET hours=:hours WHERE title=:title"), {'hours': hours, 'title': title})
        session.commit()

        # Check the number of rows affected
        rows_affected = result.rowcount
        if rows_affected == 0:
            return {"message": "No rows were updated"}, 200

        return {"message": "Update successful"}, 200
    except Exception as e:
        session.rollback()
        return {"message": str(e)}, 400
    finally:
        session.close()
    

response = post_hours('Work2', '4')

print(response)