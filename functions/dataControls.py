import pandas as pd
from .engineCreator import data_engine


def get_incomplete():
    
    engine = data_engine()

    query = "SELECT title, original_deadline FROM work_instance WHERE completed = FALSE"

    df = pd.read_sql_query(query, engine)

    engine.dispose()

    return df



