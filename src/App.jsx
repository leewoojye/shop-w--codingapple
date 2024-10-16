import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import bg from './bg.jpg'
import { useState } from 'react';
// public 폴더 안에 이미지 사용할 땐 그냥 "/이미지경로"
// public 폴더는 일일이 import 할 필요 없어 이미지 같은 리소스들 넣기 좋다.
import data from './data.js' // 다른 파일에서 변수 가져와서 쓰기 -> import/export

function App() {

  // json 형태의 데이터의 경우 코드 길이가 길이 data.js 파일에 따로 분리해준 뒤
  // import, export를 통해 데이터를 가져온다.
  let [shoes]=useState(data);

  return (
    <div>
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* 
    이미지를 넣는 두 가지 방법 : app.css 수정 / style 어튜리뷰트 사용 
    또한 어트리뷰트로 스타일 적용을 해준다 해도 css 파일에서 사진 높이를 정해주지
    않으면 안보일 수 있음.
    */}
    <div className='main-bg' style={{ backgroundImage :'url('+ bg +')'}}></div>
    <div className='brandnew'>brand new</div>
    <Container className='container'>
      <Row className='row'>
        <Col className='col1'>
        <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='80%'></img>
        </Col>
        <Col className='col2'><img src='https://codingapple1.github.io/shop/shoes2.jpg' width='80%'></img>
        </Col>
        <Col className='col3'><img src='https://codingapple1.github.io/shop/shoes3.jpg' width='80%'></img>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
