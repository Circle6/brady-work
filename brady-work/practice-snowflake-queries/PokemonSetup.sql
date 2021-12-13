USE DATABASE LINK_DB;

// Create Schema
CREATE SCHEMA POKE_SCHEMA;

CREATE TABLE POKEMON (
    id integer PRIMARY KEY AUTOINCREMENT NOT NULL, -- auto incrementing IDs
    number integer,
    pokemon_name string,  -- variable string column
    evolves_into array,
    type array,
    height integer,
    weight integer
);

ALTER TABLE POKEMON ALTER COLUMN HEIGHT set data type float;

SELECT * FROM POKEMON;

INSERT INTO POKEMON (number, pokemon_name, evolves_into, type, height, weight) 
    SELECT 9, 'Blastoise', array_construct(8), array_construct(16), 1.6, 85.5;
    
    
// FIRST TRY
SELECT 
    p.id,
    p.number,
    p.pokemon_name,
    LISTAGG(DISTINCT t.type_name, ',') as "TYPES",
    t.strength
FROM POKEMON as p
JOIN TYPE as t ON (array_contains(t.id, p.type))
WHERE NUMBER = 1
GROUP BY p.number, p.id, p.pokemon_name;

SELECT * FROM POKEMON;
SELECT * FROM TYPE;

// JUST THE TYPE TABLE
SELECT
    t.id,
    t.type_name,
    LISTAGG(DISTINCT s.type_name, ', ') as "STRENGTHS"
FROM
    TYPE as t
JOIN TYPE as s ON (array_contains(s.id, t.strength))
GROUP BY t.type_name, t.id;

SELECT 
    p.id,
    p.number,
    p.pokemon_name,
    LISTAGG(DISTINCT t.type_name, ', ') as "TYPES",
    LISTAGG(t.strengths, ', ') as "STRENGTHS"
FROM 
    POKEMON as p
JOIN (
    SELECT
        t.id,
        t.type_name,
        LISTAGG(DISTINCT s.type_name, ', ') as "STRENGTHS"
    FROM
        TYPE as t
    JOIN TYPE as s ON (array_contains(s.id, t.strength))
    GROUP BY t.type_name, t.id
) as t ON (array_contains(t.id, p.type))
WHERE 
    NUMBER = 1
GROUP BY 
    p.number, p.id, p.pokemon_name;