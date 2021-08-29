import React from "react";

const date = new Date();
const currYear = date.getFullYear();

function Footer() {
    return (
        <footer>
            <p>Copyright &copy; {currYear}</p>
        </footer>
    );
}

export default Footer;