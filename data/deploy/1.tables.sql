-- Deploy sonow:1.tables to pg
BEGIN;

DROP TABLE IF EXISTS public.position, public.detailsinfos, public.user, public.event, public.tag, public.event_has_tag, public.user_pin_event, public.user_attend_event, public.user_follow_user;


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
  "phone_number"		    text,
  "address"				      text,
  "zipcode"				      text,
  "city"				        text,
  "latitude"            float,
  "longitude"           float,
  "created_at"			    timestamptz DEFAULT CURRENT_TIMESTAMP,
  "update_at"			      timestamptz
);

CREATE TABLE IF NOT EXISTS "event" 
(
  "id"                  integer NOT NULL UNIQUE GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 CACHE 1 ),
  "title"               text NOT NULL,
  "metadescription"     text,
  "description"         text NOT NULL,
  "start"               timestamptz NOT NULL,
  "stop"                timestamptz NOT NULL,
  "location"			      text,
  "address"				      text,
  "zipcode"				      text,
  "city"				        text,
  "media"          		  text DEFAULT 'default_event_picture.webp',
  "price_ttc"           float,
  "url"                 text,
  "latitude"            float,
  "longitude"           float,
  "slug"				        text NOT NULL UNIQUE,
  "phone_number"		    text,
  "created_at"			    timestamptz DEFAULT CURRENT_TIMESTAMP,
  "update_at"		  	    timestamptz,
  "code_user_manager"   integer,
  CONSTRAINT code_user_fkey FOREIGN KEY (code_user_manager)
        REFERENCES public.user (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "tag" 
(
  "id"                  integer NOT NULL UNIQUE GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 CACHE 1 ),
  "name"                text NOT NULL,
  "color"               text NOT NULL,
  "emoji"				        text NOT NULL,
  "slug"				        text NOT NULL UNIQUE
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
  "code_event"          integer REFERENCES public.event (id),
  "code_tag"            integer REFERENCES public.tag (id),
  CONSTRAINT event_has_tag_pkey PRIMARY KEY (code_event, code_tag)
);

CREATE TABLE IF NOT EXISTS "user_follow_user" 
(
  "code_user"           integer REFERENCES public.user (id),
  "code_user2"          integer REFERENCES public.user (id),
  CONSTRAINT user_follow_user_pkey PRIMARY KEY (code_user, code_user2)
);

COMMIT;