-- Deploy sonow:2.StructureBDD_v2 to pg

BEGIN;

ALTER TABLE public.user
DROP CONSTRAINT code_detailsinfos_fkey,
DROP CONSTRAINT code_position_fkey;

ALTER TABLE public.user
ADD COLUMN address TEXT,
ADD COLUMN zipcode TEXT,
ADD COLUMN city TEXT,
ADD COLUMN phone_number TEXT,
ADD COLUMN latitude float,
ADD COLUMN longitude float,
DROP COLUMN code_detailsinfos,
DROP COLUMN code_position;

ALTER TABLE public.event
DROP CONSTRAINT code_detailsinfos_fkey,
DROP CONSTRAINT code_position_fkey;

ALTER TABLE public.event
ADD COLUMN address TEXT,
ADD COLUMN zipcode TEXT,
ADD COLUMN city TEXT,
ADD COLUMN phone_number TEXT,
ADD COLUMN latitude float,
ADD COLUMN longitude float,
ADD COLUMN code_tag INT,
ADD CONSTRAINT code_tag_fkey FOREIGN KEY (code_tag)
        REFERENCES public.tag (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
DROP COLUMN code_detailsinfos,
DROP COLUMN code_position;

DROP TABLE public.position, public.detailsinfos;

COMMIT;