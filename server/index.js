// npm init -y
// npm install express --save
// node index

const express = require( 'express' );
const jsonParser = require( 'body-parser' ).json();
const app = express();

app.use( function ( req, res, next )
{
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    next();
} );
app.get( '/', ( req, res ) => res.send( 'hello' ) );

app.post( '/signin', jsonParser, ( req, res ) =>
{
    res.send( { status: "success", data: req.body } );
} );

app.listen( 3000, () => console.log( 'server is runing' ) );

