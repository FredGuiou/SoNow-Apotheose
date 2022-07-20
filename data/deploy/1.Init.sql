-- Deploy sonow:1.Init to pg

BEGIN;

CREATE TABLE IF NOT EXISTS "position" 
(
  "code_position"       integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 CACHE 1 ),
  "latitude"            numeric NOT NULL,
  "longitude"           numeric NOT NULL
);

CREATE TABLE IF NOT EXISTS "detailsinfos" 
(
  "code_detailsinfos"   integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 CACHE 1 ),
  "address"             text,
  "zipcode"             text NOT NULL,
  "city"                text NOT NULL,
  "phone_number"        text
);

CREATE TABLE IF NOT EXISTS "user" 
(
  "code_user"           integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 CACHE 1 ),
  "firstname"           text NOT NULL,
  "lastname"            text NOT NULL,
  "nickname"            text NOT NULL,
  "gender"              text,
  "email"               text NOT NULL,
  "password"            text NOT NULL,
  "biography"           text,
  "birthday"            text NOT NULL,
  "profile_picture"     text NOT NULL,
  "language"            text NOT NULL,
  "darkmode"            boolean NOT NULL,
  CONSTRAINT "code_detailsinfos_fkey" FOREIGN KEY (code_detailsinfos)
        REFERENCES "detailsinfos" (code_detailsinfos) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
  CONSTRAINT "code_position_fkey" FOREIGN KEY (code_position)
        REFERENCES "position" (code_posititon) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS "event" 
(
  "code_event"   integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 CACHE 1 ),
  "title"               text NOT NULL,
  "metadescription"     text,
  "description"         text NOT NULL,
  "start"               timestamptz NOT NULL,
  "stop"                timestamptz NOT NULL,
  "media_link"          numeric,
  "price_ttc"           text,
  "url"                 text,
  CONSTRAINT "code_detailsinfos_fkey" FOREIGN KEY (code_detailsinfos)
        REFERENCES "detailsinfos" (code_detailsinfos) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
  CONSTRAINT "code_position_fkey" FOREIGN KEY (code_position)
        REFERENCES "position" (code_posititon) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
  CONSTRAINT "code_user_fkey" FOREIGN KEY (code_user_manager)
        REFERENCES "user" (code_user) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "tag" 
(
  "code_tag"            integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 CACHE 1 ),
  "name"                text NOT NULL,
  "color"               text NOT NULL
);

CREATE TABLE IF NOT EXISTS "user_pin_event" 
(
  "code_user"           integer FOREIGN KEY REFERENCES user(code_user),
  "code_event"          integer FOREIGN KEY REFERENCES event(code_event),
  CONSTRAINT user_pin_event_pkey PRIMARY KEY (code_user, code_event)
);

CREATE TABLE IF NOT EXISTS "user_attend_event" 
(
  "code_user"           integer FOREIGN KEY REFERENCES user(code_user),
  "code_event"          integer FOREIGN KEY REFERENCES event(code_event),
  CONSTRAINT user_attend_event_pkey PRIMARY KEY (code_user, code_event)

CREATE TABLE IF NOT EXISTS "event_has_tag" 
(
  "code_user"           integer FOREIGN KEY REFERENCES user(code_user),
  "code_tag"            integer FOREIGN KEY REFERENCES tag(code_tag),
  CONSTRAINT user_has_tag_pkey PRIMARY KEY (code_user, code_tag)
);

CREATE TABLE IF NOT EXISTS "user_follow_user" 
(
  "code_user"           integer FOREIGN KEY REFERENCES user(code_user),
  "code_user"           integer FOREIGN KEY REFERENCES user(code_user),
  CONSTRAINT user_follow_user_pkey PRIMARY KEY (code_user, code_user)
);

COMMIT;