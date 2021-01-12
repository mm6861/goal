import React, { Component } from "react";
import { Nav } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCamera } from "@fortawesome/free-solid-svg-icons";

class MainNav extends Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: "20px" }}>
        <Nav fill variant="tabs" onSelect={selectItem}>
          <Nav.Item>
            <Nav.Link eventKey="link-0">
              {/* <b style={{ fontSize: "1.5em" }}>HOME</b> */}
              <i class="fa fa-home fa-2x" aria-hidden="true"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              {/* <i class="fa fa-hand-paper-o fa-4x" aria-hidden="true"></i> */}
              <i class="fa fa-handshake-o fa-2x" aria-hidden="true"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <i class="fa fa-calendar-plus-o fa-2x" aria-hidden="true"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">
              <i class="fa fa-calendar-check-o  fa-2x" aria-hidden="true"></i>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">
              <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

function selectItem(eventKey) {
  console.log(eventKey);
}
export default MainNav;
