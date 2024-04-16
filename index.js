const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.get('/webhook', (req, res) => {
    exec('cd D:\\next_workspace\\anan_hook && git pull', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err.message);
        }
        console.log(stdout);
        res.status(200).send('Code pulled successfully');
    });
});

app.listen(port, () => {
    console.log(`Webhook server listening at http://localhost:${port}`);
});