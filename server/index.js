const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      massive = require('massive');

require('dotenv').config();

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive( process.env.CONNECTION_STRING ).then( db => {
    app.set('db', db);

    // Initialize user table and vehicle table.
    db.init_tables.user_create_seed().then( res => {
        console.log('User table init');
        db.init_tables.vehicle_create_seed().then( res => {
            console.log('Vehicle table init');
        })
    })
})

const PORT = process.env.PORT || 3000;
app.listen( PORT, () => console.log(`Ship is docked at ${PORT} leagues.`) );