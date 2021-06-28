const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //   res.end('Hello World!');
  res.end(`   <title>Contact Form</title>
        <style>
        * {
        box-sizing: border-box;
      }
      .container {
        background-color: #f2f2f2;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 17;
        padding: 10px 50px 5px 50px;
        margin-left: 25%;
        margin-right: 25%;
        border: 10px;
        border-radius: 8px;
      }
      .inner input,
      textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      .head {
        color: #fff;
        background-color: #4daea1;
        margin-left: 25%;
        margin-right: 25%;
        padding: 4px;
        padding-left: 60px;
        border-radius: 4px;
      }
      input[type="submit"] {
        color: #fff;
        background-color: #4daea1;
        width: 100px;
        padding: 7px;
        padding-top: 12px;
        padding-bottom: 12px;
      }
      input[type="submit"]:hover {
        background-color: #4caf84;
        cursor: pointer;
      }
      .container p {
        font-size: 15;
      }
      
        </style>

    <div class="head">
      <h2>Contact Form</h2>
      <p>Please fill all the texts in the fields</p>
    </div>
  </head>
  <div class="container">
    <body>
      <form action="">
        <div class="inner">
          <p>
            Your Name :
            <input
              type="text"
              name="name"
              required
              placeholder="Your Full Name"
            />
          </p>
          <p>
            Your Email :
            <input
              type="email"
              name="email"
              required
              placeholder="Valid Email Address"
            />
          </p>
          <p>
            Message :
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="8"
              required
              placeholder="Your Message to Us"
            ></textarea>
          </p>
          <p>
            Subject :
            <input
              type="text"
              name="sub"
              required
              placeholder="Eg. Job Enquiry"
            />
          </p>

          <p>
            <input type="submit" value="Send" />
          </p>
        </div>
      </form>
    </body>
  </div>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
