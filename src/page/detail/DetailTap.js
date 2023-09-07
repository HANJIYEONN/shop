import { Nav } from "react-bootstrap";

function DetailTap() {
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <div>내용0</div>
      <div>내용1</div>
      <div>내용2</div>
    </>
  );
}

export default DetailTap;
