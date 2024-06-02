// const express = require('express');
// const fetch = require('node-fetch');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// app.post('/api/proxy', async (req, res) => {
//     const { email, firstName } = req.body;



//     try {
//         const response = await fetch('https://at604281.activehosted.com/api/3/contacts', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Api-Token': 'a7f59641dcad4081b7478e2a679172586451620edf1ddf5bbe840810f6f63f2d8ee35309'
//             },
//             body: JSON.stringify({
//                 contact: {
//                     email: email,
//                     firstName: firstName
//                 }
//             })
//         });

//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.listen(port, () => {
//     console.log(`Proxy server listening at http://localhost:${port}`);
// });


import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 3000;

app.use(bodyParser.json());

app.post('/api/proxy', async (req, res) => {

    console.log("proxy api is calling")

<<<<<<< HEAD
    const { email, firstName, address } = req.body;
    console.log("address =",address)
=======
    const { email, firstName, address, course } = req.body;
    console.log("address =",address,course)
>>>>>>> 998055206acdd00975db0a4258c0337f8f63a247

    try {
        const response = await fetch('https://at604281.activehosted.com/api/3/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Api-Token': 'a7f59641dcad4081b7478e2a679172586451620edf1ddf5bbe840810f6f63f2d8ee35309'
            },
            body: JSON.stringify({
                contact: {
<<<<<<< HEAD
                    email:email,
                    firstName:firstName,
                    address:address,
                    phone:"12345678"
=======
                    email: email,
                    firstName: firstName,
                    address:address,
                    course:course
>>>>>>> 998055206acdd00975db0a4258c0337f8f63a247
                }
            })
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});

