CREATE TABLE IF NOT EXISTS public.users
(
    id serial,
    login character varying(25) NOT NULL,
    password character varying(16) NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    refresh_token character varying(255)
);

INSERT INTO users(login, password) VALUES ('user', '12345')