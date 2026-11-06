DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id)
);

INSERT INTO diary (title, description, date) VALUES
('My First Entry', 'Today I started my personal diary.', '2026-10-01 10:00:00'),
('Vacation Plans', 'I am planning a vacation to the mountains next month. Can’t wait to go hiking!', '2026-10-03 09:45:00');

