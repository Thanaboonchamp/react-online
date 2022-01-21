import React from 'react'
import {Button,Modal} from "react-bootstrap"
import {BsGithub} from "react-icons/bs"

const ContactUsPage = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4">
            <Modal.Dialog size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Contact Us</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <h5 className="mt-3">Thanaboon Luekajornsak</h5>
                Hello everyone , You can call me 'champ' for short, nice to meet you all!
                <div className="col-md-12 mt-3 ml-3">
                  <p>  📖 Right now I'm studying in Faculty of information technology , mutimedia technology branch.</p>
                  <p>  👾 I'm interest in coding especially in game industry (e.g Game devoloper, Game Designer)</p>
                  <p>  🎮 Things I like to do in free time : Sleeping, Playing some games, Drawing some staff. </p>
                  <p>  🔍 I'm looking forward to have worked and gained experience in Game industry. </p>
                </div>
                    <p>Feel free to visit my github below</p>
                <Button className='mt-1' href="https://github.com/Thanaboonchamp" variant="outline-secondary"><BsGithub size={30} color="gray"className='mr-2' /> GitHub </Button>
                <p className='mt-2' > <b>Contact me :</b> lu.thanaboon_st@tni.ac.th</p>
              </Modal.Body>
            </Modal.Dialog>
          </div>
        </div>
      </div>
    );
}

export default ContactUsPage
