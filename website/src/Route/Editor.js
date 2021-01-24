import React, { useState, useEffect, useCallback } from "react";
import { render } from "react-dom";
import {
  Card,
  Button,
  ButtonGroup,
  Dropdown,
  Container,
  Row,
  Col,
  ListGroup,
  Modal,
  Accordion
} from "react-bootstrap";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faVideo, faImage, faFileAudio} from '@fortawesome/free-solid-svg-icons';
import Timeline from "timeline-editor-react";

var layers = [
  {
      id: "3d1df1b4-4d9d-45a4-bf14-cb580ee74675",
      name: "Left"
  },
  {
      id: "7d8c4210-0cfa-4a10-8b21-01e6601e00bf",
      name: "Top"
  },
  {
      id: "65079f30-47a8-4469-833e-4f0eea04d233",
      name: "Bottom"
  }
];
var frames = {
  "3d1df1b4-4d9d-45a4-bf14-cb580ee74675": [{
      name: "Hello.png",
      second: 0,
      duration: 70
  },
  {
      name: "Welcome.png",
      second: 130,
      duration: 200
  }],
  "7d8c4210-0cfa-4a10-8b21-01e6601e00bf": [{
      name: "Goodbye.png",
      second: 10,
      duration: 150
  }],
  "65079f30-47a8-4469-833e-4f0eea04d233": []
};

function onUpdateFrames(frames) {
  console.log(frames);
}

function Editor() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="container-whapper">
      <Row>
        <Col sm={8}>
          <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        </Col>
        <Col sm={4}>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle className="btn-block text-left" as={Button} variant="link" eventKey="0">
                  <FontAwesomeIcon icon={faFilter}/> Filters
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle className="btn-block text-left" as={Button} variant="link" eventKey="1">
                <FontAwesomeIcon icon={faVideo}/> Videos
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle className="btn-block text-left" as={Button} variant="link" eventKey="2">
                <FontAwesomeIcon icon={faFileAudio}/> Music & Audio
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle className="btn-block text-left" as={Button} variant="link" eventKey="3">
                <FontAwesomeIcon icon={faImage}/> Animations & images
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col>
          <br/>
          <Timeline layers={layers} frames={frames} onUpdateFrames={onUpdateFrames}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Editor;
