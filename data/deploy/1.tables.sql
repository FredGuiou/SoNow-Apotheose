-- Deploy sonow:1.tables to pg

BEGIN;

CREATE TABLE IF NOT EXISTS "position" 
(
  "id"                  integer NOT NULL UNIQUE GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 CACHE 1 ),
  "latitude"            numeric NOT NULL,
  "longitude"           numeric NOT NULL
);

CREATE TABLE IF NOT EXISTS "detailsinfos" 
(
  "id"                  integer NOT NULL UNIQUE GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 CACHE 1 ),
  "address"             text,
  "zipcode"             text NOT NULL,
  "city"                text NOT NULL,
  "phone_number"        text
);

CREATE TABLE IF NOT EXISTS "user" 
(
  "id"                  integer NOT NULL UNIQUE GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 CACHE 1 ),
  "firstname"           text NOT NULL,
  "lastname"            text NOT NULL,
  "nickname"            text NOT NULL UNIQUE,
  "gender"              text,
  "email"               text NOT NULL UNIQUE,
  "password"            text NOT NULL,
  "biography"           text,
  "birthday"            date,
  "profile_picture"     text DEFAULT 'default_profile_picture.webp',
  "language"            text DEFAULT 'FR',
  "darkmode"            boolean NOT NULL DEFAULT true,
  "code_detailsinfos"   integer,
  "code_position"       integer, 
  CONSTRAINT code_detailsinfos_fkey FOREIGN KEY (code_detailsinfos)
        REFERENCES public.detailsinfos (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
  CONSTRAINT code_position_fkey FOREIGN KEY (code_position)
        REFERENCES public.position (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS "event" 
(
  "id"                  integer NOT NULL UNIQUE GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 CACHE 1 ),
  "title"               text NOT NULL,
  "metadescription"     text,
  "description"         text NOT NULL,
  "start"               timestamptz NOT NULL,
  "stop"                timestamptz NOT NULL,
  "media"          		  text DEFAULT 'default_event_picture',
  "price_ttc"           float,
  "url"                 text,
  "code_detailsinfos"   integer,
  "code_position"       integer,
  "code_user_manager"   integer,
  CONSTRAINT code_detailsinfos_fkey FOREIGN KEY (code_detailsinfos)
        REFERENCES public.detailsinfos (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
  CONSTRAINT code_position_fkey FOREIGN KEY (code_position)
        REFERENCES public.position (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
  CONSTRAINT code_user_fkey FOREIGN KEY (code_user_manager)
        REFERENCES public.user (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "tag" 
(
  "id"                  integer NOT NULL UNIQUE GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 CACHE 1 ),
  "name"                text NOT NULL,
  "color"               text NOT NULL
);

CREATE TABLE IF NOT EXISTS "user_pin_event" 
(
  "code_user"           integer REFERENCES public.user (id),
  "code_event"          integer REFERENCES public.event (id),
  CONSTRAINT user_pin_event_pkey PRIMARY KEY (code_user, code_event)
);

CREATE TABLE IF NOT EXISTS "user_attend_event" 
(
  "code_user"           integer REFERENCES public.user (id),
  "code_event"          integer REFERENCES public.event (id),
  CONSTRAINT user_attend_event_pkey PRIMARY KEY (code_user, code_event)
);

CREATE TABLE IF NOT EXISTS "event_has_tag" 
(
  "code_user"           integer REFERENCES public.user (id),
  "code_tag"            integer REFERENCES public.tag (id),
  CONSTRAINT user_has_tag_pkey PRIMARY KEY (code_user, code_tag)
);

CREATE TABLE IF NOT EXISTS "user_follow_user" 
(
  "code_user"           integer REFERENCES public.user (id),
  "code_user2"          integer REFERENCES public.user (id),
  CONSTRAINT user_follow_user_pkey PRIMARY KEY (code_user, code_user2)
);

COMMIT;