CREATE TABLE to_do_list_users (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
nickname VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL
);

CREATE TABLE to_do_tasks (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description VARCHAR(1024) DEFAULT "No descriprion provided",
status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
author_id VARCHAR(255),
FOREIGN KEY (author_id) REFERENCES to_do_list_users(id)
);

CREATE TABLE to_do_list_assignees (
task_id VARCHAR(255),
assignee_id VARCHAR(255),
PRIMARY KEY (task_id, assignee_id),
FOREIGN KEY (task_id) REFERENCES to_do_tasks(id),
FOREIGN KEY (assignee_id) REFERENCES to_do_list_users(id)
);
