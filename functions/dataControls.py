import pandas as pd
from .engineCreator import data_engine


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

