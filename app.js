const express = require('express'),
    app = express(),
    port = process.env.port || 3000;


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');

});

app.listen(port, () => {
    console.log(`server started on ${port}`);
});