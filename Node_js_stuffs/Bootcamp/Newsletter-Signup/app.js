const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const eMailid = req.body.eMail;
  const data = {
    members: [
      {
        email_address: eMailid,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url = 'https://us6.api.mailchimp.com/3.0/lists/4d11fa2cf0';
  const options = {
    method: 'POST',
    auth: 'sunny:f50a338f085467ba9dbdee3222be5f91-us6',
  };

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + '/success.html');
    } else {
      res.sendFile(__dirname + '/failure.html');
    }

    response.on('data', function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.listen(3000, () => {
  console.log('Server listening at port 3000');
});

// API Key
// f50a338f085467ba9dbdee3222be5f91-us6

// List ID
// 4d11fa2cf0
