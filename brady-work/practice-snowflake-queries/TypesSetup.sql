CREATE OR REPLACE TABLE TYPE (
    id integer PRIMARY KEY AUTOINCREMENT NOT NULL,    
    type_name string,
    color string,
    strength array,
    weakness array
);

INSERT INTO TYPE (type_name, color) 
VALUES ('FIGHTING', 'red');

INSERT INTO TYPE (type_name, color) 
VALUES ('FIRE', 'orange');

INSERT INTO TYPE (type_name, color) 
VALUES ('FLYING', 'orchid');

INSERT INTO TYPE (type_name, color) 
VALUES ('GHOST', 'purple');

INSERT INTO TYPE (type_name, color) 
VALUES ('GRASS', 'green');

INSERT INTO TYPE (type_name, color) 
VALUES ('GROUND', 'tan');

INSERT INTO TYPE (type_name, color) 
VALUES ('ICE', 'light-blue');

INSERT INTO TYPE (type_name, color) 
VALUES ('NORMAL', 'white');

INSERT INTO TYPE (type_name, color) 
VALUES ('POISON', 'poison-purple');

INSERT INTO TYPE (type_name, color) 
VALUES ('PSYCHIC', 'pink');

INSERT INTO TYPE (type_name, color) 
VALUES ('ROCK', 'brown');

INSERT INTO TYPE (type_name, color) 
VALUES ('WATER', 'blue');

SELECT * FROM TYPE;

UPDATE TYPE
SET
    STRENGTH = '[1,9]',
    WEAKNESS = '[2,4,10,15]'
WHERE ID = 13;