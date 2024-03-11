from .engineCreator import data_engine, create_session
from sqlalchemy import text
import pandas as pd

def see_unassigned():
    engine = data_engine()
    query = "SELECT type, title, molecule, author, original_deadline, notes FROM work_instance WHERE assigned_user IS NULL"
    df = pd.read_sql_query(query, engine)
    engine.dispose()
    return df


def set_assignee(title, assigned_user):
    engine = data_engine()  # Assuming data_engine is a function that returns an engine
    Session = create_session(engine)
    session = Session()

    try:
        result = session.execute(text("UPDATE work_instance SET assigned_user=:assigned_user where title=:title"), {'assigned_user':assigned_user, 'title':title})
        session.commit()
        rows_updated = result.rowcount
    except Exception as e:
        print(f"An error occurred: {e}")
        session.rollback()
        rows_updated = 0
    finally:
        session.close()

    return rows_updated

