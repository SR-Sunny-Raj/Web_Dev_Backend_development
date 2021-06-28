const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Grid Challenge - 2</title>
    <style>
    body {
        background-color: lightgoldenrodyellow;
      }
      .container {
        display: grid;
        height: 100%;
        grid-template-columns: 20% 63% 14%;
        grid-template-rows: 15% 70% 10%;
        grid-gap: 20px;
        font-family: cursive;
      }
      #box-1 {
        grid-row-start: 1;
        grid-row-end: 4;
      }
      #box-2 {
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
        padding-left: 280px;
        background-color: lightseagreen;
        border-radius: 7px;
        box-shadow: 3px 3px 2px #ccc;
      }
      #box-3 {
        font-family: cursive;
        font-size: 18;
        word-spacing: 7px;
        padding: 0 15px 0 15px;
      }
      a {
        text-decoration: none;
      }
      a:hover {
        color: tomato;
      }
      #box-5 {
        grid-column-start: 2;
        grid-column-end: 4;
        background-color: teal;
        border-radius: 7px;
        box-shadow: 3px 3px 2px #ccc;
      }
      .n1 {
        display: grid;
        width: 80%;
        text-align: center;
        padding: 50px 0 0 30px;
        grid-template-rows: repeat(5, 50px);
        row-gap: 10px;
      }
      .n1 > a {
        border: 2px solid black;
        text-align: center;
        padding-top: 10px;
        border-radius: 100px;
        background-color: orange;
        color: white;
      }
      .n1 > a:hover {
        background-color: orangered;
      }
      .n2 {
        display: grid;
        grid-template-columns: repeat(5, 100px);
        grid-gap: 20px;
        padding: 25px 0 0 25px;
        text-align: center;
      }
      .n2 > a {
        color: white;
      }
      .n2 > .a2 {
        padding-right: 40px;
      }
      .n2 > a:hover {
        color: orangered;
      }
      #box-4 > img {
        width: 100%;
        height: 50%;
      }      
    </style>
  </head>
  <body>
    <div class="container">
      <div class="boxes" id="box-1">
        <nav class="n1">
          <a
            href="https://en.wikipedia.org/wiki/C_(programming_language)"
            class="a1"
            >C Programming</a
          ><a href="https://en.wikipedia.org/wiki/C%2B%2B" class="a2"
            >C++ Programming</a
          ><a
            href="https://en.wikipedia.org/wiki/Java_(programming_language)"
            class="a3"
            >Java Programming</a
          ><a
            href="https://en.wikipedia.org/wiki/Python_(programming_language)"
            class="a4"
            >Python Programming</a
          ><a
            href="https://en.wikipedia.org/wiki/Android_software_development"
            class="a5"
            >Android Developement</a
          >
        </nav>
      </div>
      <div class="boxes" id="box-2"><h1>Computer Programming</h1></div>
      <div class="boxes" id="box-3">
        <p>
          Computer programming is the process of designing and building an
          executable computer program to accomplish a specific computing result
          or to perform a specific task. Programming involves tasks such as:
          analysis, generating algorithms, profiling algorithms' accuracy and
          resource consumption, and the implementation of algorithms in a chosen
          programming language (commonly referred to as coding).The source code
          of a program is written in one or more languages that are intelligible
          to programmers, rather than machine code, which is directly executed
          by the central processing unit. The purpose of programming is to find
          a sequence of instructions that will automate the performance of a
          task (which can be as complex as an operating system) on a computer,
          often for solving a given problem. Proficient programming thus often
          requires expertise in several different subjects, including knowledge
          of the application domain, specialized algorithms, and formal
          logic.Tasks accompanying and related to programming include: testing,
          debugging, source code maintenance, implementation of build systems,
          and management of derived artifacts, such as the machine code of
          computer programs. These might be considered part of the programming
          process, but often the term software development is used for this
          larger process with the term programming, implementation, or coding
          reserved for the actual writing of code. Software engineering combines
          engineering techniques with software development practices. Reverse
          engineering is a related process used by designers, analysts and
          programmers to understand and re-create/re-implement.
          <a
            href="https://en.wikipedia.org/wiki/Computer_programming"
            target="_blank"
            rel="noopener noreferrer"
            >Read More</a
          >
        </p>
      </div>
      <div class="boxes" id="box-4">
        <img src="ad.gif" alt="ads" /><img src="ad.gif" alt="ads" />
      </div>
      <div class="boxes" id="box-5">
        <nav class="n2">
          <a href=#" class="a1">Home</a
          ><a href="#" class="a2">&copy;SRaj</a
          ><a href="#" class="a3">Privacy Policy</a
          ><a href="#" class="a4">Help</a
          ><a href="#" class="a5">Contact Us</a>
        </nav>
      </div>
    </div>
  </body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
