const { createVendiaClient } = require('@vendia/client')
const express = require('express');
const app = express();
//creating express app

const client = createVendiaClient({
    apiUrl: 'https://amoej1r6g6.execute-api.us-west-2.amazonaws.com/graphql/',
    websocketUrl: 'wss://k59wej25i2.execute-api.us-west-2.amazonaws.com/graphql',
    apiKey: '2aviuYwaVpZtVgoBTbLpWmxwbwbhTFSTMNbXTjhQWJGg',
})
const { entities } = client;
//Setting up Vendia

async function getData(){
    const list = await entities.people.list();
    app.get("/", (req,res) => {
        res.send(list)
    })
}
getData();
//getting data

app.listen("3001", () => {
    console.log("Server up and running on port 3001");
})
//running express server