import React from "react";


import "../styles/Footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer row p-3">
        <div className="col d-flex justify-content-right align-items-center">
          <ul>
            <li className="icons">
               <box-icon color="white" type='logo' name='instagram'></box-icon><a href="#">Instagram</a>
            </li>
            <li className="icons">
              <box-icon color="white" type='logo' name='facebook-circle'></box-icon><a href="#">Facebook</a>
            </li>
            <li className="icons">
              <box-icon color="white" name='telegram' type='logo' ></box-icon> <a href="#">Telegram</a>
            </li>
          </ul>
        </div>
        <div className="col d-flex justify-content-right align-items-center">
          <ul>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Guías</a>
            </li>
            <li>
              <a href="#">Acesorías</a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <p className="m-0">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              optio voluptate qui adipisci, hic voluptatibus totam dolorem
              cumque repellendus amet! Repudiandae, ab error unde porro sint
              fugit qui temporibus, consequatur dolores sit quas perspiciatis
              omnis magnam iure ut, quod dignissimos molestias voluptas
              architecto nam! Accusantium corporis sit eos dolorum accusamus.
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
