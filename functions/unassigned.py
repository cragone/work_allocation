from .engineCreator import data_engine
import pandas as pd

def see_unassigned():
    engine = data_engine()
    query = "SELECT type, title, molecule, author, original_deadline, notes FROM work_instance WHERE assigned_user IS NULL"
    df = pd.read_sql_query(query, engine)
    engine.dispose()
    return df