require('dotenv').config({path:__dirname+'/../../.env'})
const detailsinfos = require("./detailsinfos.json");
const events = require("./event.json");
const tags = require("./tag.json");
const users = require("./user.json");
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

    await client.query("TRUNCATE TABLE public.detailsinfos,public.event,public.tag,public.user RESTART IDENTITY CASCADE");
    

    console.log("J'entre dans detailsinfos");
    for (const detail of detailsinfos) {
        await client.query("INSERT INTO public.detailsinfos(address, zipcode, city, phone_number) VALUES ($1, $2, $3, $4) RETURNING address", [detail.address, detail.zipcode, detail.city, detail.phone_number]);
    }
    console.log("Ok pour detailsinfos");


    console.log("J'entre dans users");
    for (const user of users) {
        await client.query("INSERT INTO public.user(firstname, lastname, nickname, email, password, code_detailsinfos) VALUES ($1, $2, $3, $4, $5, $6) RETURNING firstname", [user.firstname, user.lastname, user.nickname, user.email, user.password, user.code_detailsinfos]);
    }
    console.log("Ok pour users");


    console.log("J'entre dans events");
    for (const event of events) {
        await client.query("INSERT INTO public.event(title, slug, description, metadescription, start, stop, code_detailsinfos) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING title", [event.title, event.slug, event.description, event.metadescription, event.start, event.stop, event.code_detailsinfos]);
    }
    console.log("Ok pour events");


    console.log("J'entre dans tags");
    for (const tag of tags) {
        await client.query("INSERT INTO public.tag(name, color, emoji, slug) VALUES ($1, $2, $3, $4) RETURNING name", [tag.name, tag.color, tag.emoji, tag.slug]);
    }
    console.log("Ok pour tags");


    client.end();
})();