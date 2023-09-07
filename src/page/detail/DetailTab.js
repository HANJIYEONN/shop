import { Nav } from "react-bootstrap";
import TabContent from "./TabContent";
import { useState } from "react";

function DetailTab() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <Nav
        variant="tabs"
        defaultActiveKey="link0"
        style={{ marginTop: "20px" }}
      >
        <Nav.Item>
          <Nav.Link onClick={() => setTab(0)} eventKey="link0">
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(1)} eventKey="link1">
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(2)} eventKey="link2">
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </>
  );
}

export default DetailTab;
