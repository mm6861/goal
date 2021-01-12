import React, { Component } from "react";
import MainNav from "./MainNav";
import { Card, Button } from "react-bootstrap";

class Main extends Component {
  render() {
    let goalName = "자격증 따기";
    return (
      <div>
        <MainNav></MainNav>
        <div className="container text-left" style={{ paddingTop: "20px" }}>
          <Card body>
            {/* style={{ fontSize: "1.5em", border: "none" }} */}
            {goalName}가 종료되었습니다.
            <span>
              {/* style={{ paddingLeft: "15px", color: "blue" }} */}
              [결과 등록]
            </span>
          </Card>

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
        </div>
      </div>
    );
  }
}

export default Main;
