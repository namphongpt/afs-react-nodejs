import React, { useState, useEffect, useCallback } from "react";
import { render } from "react-dom";
import { Card, Button, ButtonGroup, Dropdown, Container, Row, Col } from "react-bootstrap";

function videosFile() {
  return (
    <Container className="container-whapper">
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.ytimg.com/vi/S7SLep244ss/maxresdefault.jpg"
            />
            <Card.Body>
              <Card.Title>Video test title example</Card.Title>
              <Dropdown className="btn-block" as={ButtonGroup}>
                <Button variant="primary">Preview</Button>

                <Dropdown.Toggle
                  split
                  variant="ligth"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Share</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.ytimg.com/vi/S7SLep244ss/maxresdefault.jpg"
            />
            <Card.Body>
              <Card.Title>Video test title example</Card.Title>
              <Dropdown className="btn-block" as={ButtonGroup}>
                <Button variant="primary">Preview</Button>

                <Dropdown.Toggle
                  split
                  variant="ligth"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Share</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.ytimg.com/vi/S7SLep244ss/maxresdefault.jpg"
            />
            <Card.Body>
              <Card.Title>Video test title example</Card.Title>
              <Dropdown className="btn-block" as={ButtonGroup}>
                <Button variant="primary">Preview</Button>

                <Dropdown.Toggle
                  split
                  variant="ligth"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Share</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.ytimg.com/vi/S7SLep244ss/maxresdefault.jpg"
            />
            <Card.Body>
              <Card.Title>&nbsp;</Card.Title>
              <Dropdown className="btn-block" as={ButtonGroup}>
                <Button variant="primary">&nbsp;</Button>

                <Dropdown.Toggle
                  split
                  variant="ligth"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">&nbsp;</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">&nbsp;</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">&nbsp;</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default videosFile;
