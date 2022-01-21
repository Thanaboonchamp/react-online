import React from 'react'
import { Card, Button } from "react-bootstrap"
import { BsGithub } from "react-icons/bs";
const Contactus = () => {
    return (
        <div className="container">
            <div>
                <Card>
                    <Card.Header >Contactus</Card.Header>
                    <Card.Body>
                        <Card.Title>Thanaboon Luekajornsak</Card.Title>
                        <Card.Text>
                            You can call me "Champ" . Nice to meet you !
                            <ul className="mt-2">
                                <li className="mt-2" >
                                    I am studying at Thai-Nichi Institute of Technology. since I was a kid Technology multimedia has been my passion.
                                </li>
                                <li className="mt-2" >I always take my time to practice and learning about Video Editing and Website Development.</li>
                                <li className="mt-2" >I Love to Play Video Games and listen Music !</li>
                                <li className="mt-2" >
                                    I wish  in the future I can work with Big company !
                                </li>
                            </ul>
                        </Card.Text>
                        <Button href='https://github.com/Thanaboonchamp' variant="outline-secondary"><BsGithub color="outline-info" size="2em" /> Click here</Button>
                        <br />
                        <br />
                        <b>Contact Me</b> : lu.thanaboon_st@tni.ac.th
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Contactus
