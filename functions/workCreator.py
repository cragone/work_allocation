from .engineCreator import data_engine, create_session
from sqlalchemy import text


def create_work_instance(type, title, molecule, author, original_deadline, notes, hours=None, assigned_user=None, deadline_status=None, date_complete=None, assigned_by=None, completed=False, status="incomplete"):
    engine = data_engine()
    Session = create_session(engine)
    session = Session()

    result = session.execute(text('INSERT INTO work_instance (type, date_complete, hours, status, title, molecule, author, original_deadline, notes, assigned_user, completed, deadline_status, assigned_by) VALUES (:type, :date_complete, :hours, :status, :title, :molecule, :author, :original_deadline, :notes, :assigned_user, :completed, :deadline_status, :assigned_by)'), 
                             {'type': type, 'date_complete': date_complete, 'hours': hours, 'status': status, 'title': title, 'molecule': molecule, 'author': author, 'original_deadline': original_deadline, 'notes': notes, 'assigned_user': assigned_user, 'completed': completed, 'deadline_status': deadline_status, 'assigned_by': assigned_by})

    session.commit()

    print(result.rowcount)  # print the number of rows inserted

    return result.rowcount  # return the number of rows inserted