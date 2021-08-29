import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar-img"/>
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Sunny Raj" img="images\FaceApp_1592584175310.jpg" tel="705077****" email="sraj1333.sr@gmail.com" />
    <Card name="Bunny Raj" img="images\IMG_20191013_151423.jpg" tel="552225" email="sjkdak@yahoo.com"/>
    </div>,
  document.getElementById("root")
);
