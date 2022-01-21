import React from "react";
import { BsGithub } from "react-icons/bs";

import { Card, Button } from "react-bootstrap";

function ContactPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 m-4">
          <Card>
            <Card.Header>Contact Us</Card.Header>
            <Card.Body>
              <Card.Title>Thanaboon Luekajornsak</Card.Title>
              <Card.Text>
              Hello everyone , You can call me 'champ' for short, nice to meet you all!
                <ul className="mt-2">
                  <li>
                  I am studying at Thai-Nichi Institute of Technology. since I was a kid Technology multimedia has been my passion.
                  </li>
                  <li>I always take my time to practice and learning about Video Editing and Website Development.</li>
                  <li>I Love to Play Video Games and listen Music !</li>
                  <li>
                  I wish  in the future I can work with Big company !
                  </li>
                </ul>
                For my github visit link below.
              </Card.Text>
              <Button
                href="https://github.com/Thanaboonchamp"
                variant="outline-secondary"
              >
                <BsGithub size={30} color="gray" /> Click here
              </Button>
              <br />
              <br />
              <b>Contact Me</b> : lu.thanaboon_st@tni.ac.th
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
