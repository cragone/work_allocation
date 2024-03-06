from engineCreator import data_engine, create_session
from sqlalchemy import text


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
    

response = post_hours('Work1', '3')

print(response)