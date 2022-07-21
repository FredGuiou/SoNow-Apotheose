-- Revert sonow:1.tables from pg

BEGIN;

DROP TABLE IF EXISTS "detailsinfos", "event", "event_has_tag", "position", "tag", "user", "user_attend_event", "user_pin_event", "user_follow_user" CASCADE;

COMMIT;
