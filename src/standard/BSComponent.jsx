import React, { Component } from "react";
import { Button, Badge, Card, Dropdown, Accordion } from "react-bootstrap";

class BSComponent extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ paddingTop: "10px", fontSize: "1.2em" }}
      >
        <div style={{ padding: "10px", border: "1px solid black" }}>
          <h3>
            버튼 <Button variant="info">info</Button>
          </h3>
          <pre>{`<Button variant="info">info</Button>`}</pre>
        </div>

        <div style={{ padding: "10px", border: "1px solid black" }}>
          <h3>조회조건 콤보</h3>
          <Dropdown>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <pre>{`<Dropdown>
  <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>`}</pre>
        </div>

        <div style={{ padding: "10px", border: "1px solid black" }}>
          <h3>
            배지 <Badge variant="danger">참여필수</Badge>{" "}
            <Badge variant="success">계획작성</Badge>{" "}
            <Badge variant="primary">세부목표</Badge>
          </h3>
          <pre>{`  <Badge variant="danger">참여필수</Badge>{' '}
  <Badge variant="success">계획작성</Badge>{' '}
  <Badge variant="Primary">세부목표</Badge>{' '}`}</pre>
        </div>

        <div style={{ padding: "10px", border: "1px solid black" }}>
          <h3>리스트 </h3>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>

            <Card.Img style={{ height: "100px", backgroundColor: "#333" }} />
          </Card>
          <br />
          <pre>{`<Card>
  <Card.Img src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>  
  <Card.Img src="holder.js/100px180" />
</Card>`}</pre>
        </div>

        <div style={{ padding: "10px", border: "1px solid black" }}>
          <h3>{`상세및 작성 팝업 화면 -> 아코디언`}</h3>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <br />
          <pre>{`<Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>`}</pre>
        </div>
        <br />
      </div>
    );
  }
}

export default BSComponent;
