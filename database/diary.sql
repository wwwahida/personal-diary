DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id)
);

INSERT INTO diary (title, description) VALUES
('My First Entry', 'Today I started my personal diary.'),
('Vacation Plans', 'I am planning a vacation to the mountains next month. Can’t wait to go hiking!');


