-- Verify sonow:1.Init on pg

BEGIN;

INSERT INTO position ("latitude", "longitude")
VALUES ('51.561576266415145', '-1.458350196524938');

INSERT INTO detailsinfos ("address", "zipcode", "city", "phone_number")
VALUES('56 rue des floppes','56600', 'Villacity', '0654321987');

INSERT INTO user ("firstname","lastname","nickname","email","password","birthday","profile_picture","language","darkmode","code_detailsinfos","code_position")
VALUES 
  ('Truc', 'Muche','TrucMuche','trucmuche@faux.fr','Machinechosepasswordpasdutoutsecumaisquandmemehasheravecbcrypt','1658326128','trucmucheimage.jpg','Mandarin',1,1,1),
  ('Truc2', 'Muche2','TrucMuche2','trucmuche2@faux.fr','Machinechosepasswordpasdutoutsecumaisquandmemehasheravecbcrypt2','1658326130','trucmuche2image.jpg','Chinois',1,1,1);

INSERT INTO event ("title", "description", "start", "stop", "code_detailsinfos", "code_position","code_user_manager")
VALUES('SuperBowl','C''est le superbowl', 1661004528, 1663682928, 1,1,1);

INSERT INTO tag ("name", "color")
VALUES ('Sport', '#FF00FF');

INSERT INTO user_pin_event ("code_user", "code_event")
VALUES(1,1);

INSERT INTO user_attend_event ("code_user", "code_event")
VALUES (1,1);

INSERT INTO event_has_tag ("code_event", "code_tag")
VALUES(1,1);

INSERT INTO user_follow_user ("code_user", "code_user")
VALUES (1, 2);

ROLLBACK;
