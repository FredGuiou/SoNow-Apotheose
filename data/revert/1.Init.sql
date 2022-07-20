-- Revert sonow:1.Init from pg

BEGIN;

DROP TABLE IF NOT EXISTS "position","detailsinfos","user","event","tag","user_pin_event","user_attend_event","event_has_tag","user_follow_user" CASCADE;

COMMIT;
