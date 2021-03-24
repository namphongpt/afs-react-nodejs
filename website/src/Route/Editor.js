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
  Accordion,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faVideo,
  faImage,
  faFileAudio,
  faHeading,
  faBold,
  faFont,
  faPlus,
  faBolt,
  faFileUpload,
  faUpload,
  faPodcast,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Timeline from "timeline-editor-react";

var layers = [
  {
    id: "3d1df1b4-4d9d-45a4-bf14-cb580ee74675",
    name: "Left",
  },
  {
    id: "7d8c4210-0cfa-4a10-8b21-01e6601e00bf",
    name: "Top",
  },
  {
    id: "65079f30-47a8-4469-833e-4f0eea04d233",
    name: "Bottom",
  },
];
var frames = {
  "3d1df1b4-4d9d-45a4-bf14-cb580ee74675": [
    {
      name: "Hello.png",
      second: 0,
      duration: 70,
    },
    {
      name: "Welcome.png",
      second: 130,
      duration: 200,
    },
  ],
  "7d8c4210-0cfa-4a10-8b21-01e6601e00bf": [
    {
      name: "Goodbye.png",
      second: 10,
      duration: 150,
    },
  ],
  "65079f30-47a8-4469-833e-4f0eea04d233": [],
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
        <Col sm={9}>
          <ReactPlayer
            width={'100%'}
            playing={true}
            loop={true}
            controls={true}
            url="http://localhost:3002/videos/23/preview-23-out.mp4"
          />
          <br />
          <Timeline
            layers={layers}
            frames={frames}
            onUpdateFrames={onUpdateFrames}
          />
        </Col>
        <Col sm={3}>
          <Accordion className="bg-primary" defaultActiveKey="0">
            <Card>
              <Card.Header className="bg-primary">
                <Accordion.Toggle
                  className="btn-block bg-primary text-light text-left"
                  as={Button}
                  variant="link"
                  eventKey="0"
                >
                  <FontAwesomeIcon icon={faFilter} /> Filters
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <h3 className="text-primary">Texting</h3>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                        <h5 className="text-primary">Text</h5>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Button variant="primary">
                      Add <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </InputGroup>
                  <ButtonGroup aria-label="Texting tools">
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faHeading} />
                    </Button>
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faBold} />
                    </Button>
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faFont} />
                    </Button>
                  </ButtonGroup>
                  <hr/>
                  <h3 className="text-primary">Transitions</h3>
                  <ButtonGroup aria-label="Texting tools">
                    <Button variant="light">
                    <FontAwesomeIcon icon={faBolt} /> Fede In
                    </Button>
                    <Button variant="light">
                    <FontAwesomeIcon icon={faBolt} /> Cubic In
                    </Button>
                    <Button variant="light">
                    <FontAwesomeIcon icon={faBolt} /> Easier Normal
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup aria-label="Texting tools">
                    <Button variant="light">
                    <FontAwesomeIcon icon={faBolt} /> Fede Out
                    </Button>
                    <Button variant="light">
                    <FontAwesomeIcon icon={faBolt} /> Cubic In & Out 
                    </Button>
                    <Button variant="light">
                    <FontAwesomeIcon icon={faBolt} /> Easier All
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="bg-primary">
                <Accordion.Toggle
                  className="btn-block  bg-primary text-light text-left"
                  as={Button}
                  variant="link"
                  eventKey="1"
                >
                  <FontAwesomeIcon icon={faVideo} /> Videos
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                <ButtonGroup aria-label="Texting tools">
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faUpload} /> Upload video
                    </Button>
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faVideo} /> Videos media
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="bg-primary">
                <Accordion.Toggle
                  className="btn-block bg-primary text-light text-left"
                  as={Button}
                  variant="link"
                  eventKey="2"
                >
                  <FontAwesomeIcon icon={faFileAudio} /> Music & Audio
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                <ButtonGroup aria-label="Texting tools">
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faFileAudio} /> Free Audio
                    </Button>
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faPodcast} /> Buy Music
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="bg-primary">
                <Accordion.Toggle
                  className="btn-block bg-primary text-light text-left"
                  as={Button}
                  variant="link"
                  eventKey="3"
                >
                  <FontAwesomeIcon icon={faImage} /> Gif Animations & Images
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                <ButtonGroup aria-label="Texting tools">
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faEye} /> Unsplash
                    </Button>
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faEye} /> Gifhy
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default Editor;
