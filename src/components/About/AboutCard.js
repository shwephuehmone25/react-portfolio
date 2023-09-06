import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SHWE PHUE HMONE </span>
            from <span className="purple"> Dawei, Myanmar.</span>
            <br /> I hold a Bachelor's degree in Software Engineering and Programming, which I earned from the University of Computer Studies, Dawei.
            <br />
            Additionally, I am currently employed as a Backend Developer at
            ILBC - IGCSE & A LEVEL SCHOOL.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "DO OR DIE!"{" "}
          </p>
          <footer className="blockquote-footer">Shwe Phue Hmone</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
