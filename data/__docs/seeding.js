require('dotenv').config({path:__dirname+'/../../.env'})
const eventHasTag = require("./event_has_tag.json");
const events = require("./event.json");
const tags = require("./tag.json");
const users = require("./user.json");
const userAttendEvent = require("./user_attend_event.json");
const userPinEvent = require("./user_pin_event.json");
const userFollowUser = require("./user_follow_user.json");
const connectionString = process.env.DATABASE_URL

// 2. je les insère dans la BDD
// 2.1 je me connecte à la bdd

const { Pool } = require("pg");
const client = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});


(async () => {

    await client.connect();

    await client.query("TRUNCATE TABLE public.event,public.tag,public.user,public.event_has_tag RESTART IDENTITY CASCADE");
    

    console.log("J'entre dans users");
    for (const user of users) {
        await client.query("INSERT INTO public.user(firstname, lastname, nickname, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING firstname", [user.firstname, user.lastname, user.nickname, user.email, user.password]);
    }
    console.log("Ok pour users");


    console.log("J'entre dans events");
    for (const event of events) {
        await client.query("INSERT INTO public.event(title, slug, description, metadescription, start, stop, location, address, zipcode, city, media, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING title", [event.title, event.slug, event.description, event.metadescription, event.start, event.stop, event.location, event.address, event.zipcode, event.city, event.media, event.latitude, event.longitude]);
    }
    console.log("Ok pour events");


    console.log("J'entre dans tags");
    for (const tag of tags) {
        await client.query("INSERT INTO public.tag(name, color, emoji, slug) VALUES ($1, $2, $3, $4) RETURNING name", [tag.name, tag.color, tag.emoji, tag.slug]);
    }
    console.log("Ok pour tags");

    console.log("J'entre dans event_has_tag");
    for (const eventTag of eventHasTag) {
        await client.query("INSERT INTO public.event_has_tag(code_event, code_tag) VALUES ($1, $2) RETURNING code_event,code_tag", [eventTag.code_event, eventTag.code_tag]);
    }
    console.log("Ok pour event_has_tag");

    console.log("J'entre dans user_attend_event");
    for (const userAEvent of userAttendEvent) {
        await client.query("INSERT INTO public.user_attend_event(code_user, code_event) VALUES ($1, $2) RETURNING code_user,code_event", [userAEvent.code_user, userAEvent.code_event]);
    }
    console.log("Ok pour user_attend_event");

    console.log("J'entre dans user_pin_event");
    for (const userPEvent of userPinEvent) {
        await client.query("INSERT INTO public.user_pin_event(code_user, code_event) VALUES ($1, $2) RETURNING code_user,code_event", [userPEvent.code_user, userPEvent.code_event]);
    }
    console.log("Ok pour user_pin_event");

    console.log("J'entre dans user_follow_user");
    for (const userFUser of userFollowUser) {
        await client.query("INSERT INTO public.user_follow_user(code_user, code_user2) VALUES ($1, $2) RETURNING code_user,code_user2", [userFUser.code_user, userFUser.code_user2]);
    }
    console.log("Ok pour user_follow_user");

    client.end();
})();