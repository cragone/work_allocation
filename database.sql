CREATE TABLE work_instance (
    type VARCHAR(255),
    date_complete DATE,
    hours VARCHAR(255),
    status VARCHAR(255),
    title VARCHAR(255) UNIQUE,
    molecule VARCHAR(255),
    author VARCHAR(255),
    original_deadline VARCHAR(255),
    notes TEXT,
    assigned_user VARCHAR(255),
    completed BOOLEAN,
    deadline_status VARCHAR(255),
    assigned_by VARCHAR(255),
    serial_ID SERIAL PRIMARY KEY
);

CREATE TABLE file_table (
    title VARCHAR(255),
    serial_id SERIAL PRIMARY KEY,
    file_type VARCHAR(255) CHECK (file_type IN ('review', 'attachment')),
    file_extension VARCHAR(255),
    file_content_old BYTEA,
    file_content_new BYTEA,
    FOREIGN KEY (title) REFERENCES work_instance(title)
);

CREATE TABLE user_table (
    user_email VARCHAR(255) PRIMARY KEY,
    user_full_name VARCHAR(255),
    username VARCHAR(255)
);

dbname= workallocation


example data:
INSERT INTO work_instance (type, date_complete, hours, status, title, molecule, author, original_deadline, notes, assigned_user, completed, deadline_status, file_content, edited_file_content, assigned_by)
VALUES 
('NOE', '2022-01-01', 8, 'Completed', 'Work1', 'REG88', 'Author1', '2022-01-01', 'Note1', 'User1', TRUE, 'On Time', 'Assigner1'),
('EOE', '2022-01-02', 6, 'In Progress', 'Work2', 'REGN5093', 'Author2', '2022-01-02', 'Note2', 'User2', FALSE, 'Delayed', 'Assigner2'),
('DNF', '2022-01-03', 4, 'Not Started', 'Work3', 'REGN17090', 'Author3', '2022-01-03', 'Note3', 'User3', FALSE, 'On Time', 'Assigner3');