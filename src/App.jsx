import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import bg from './bg.jpg' // 이미지 경로

function App() {
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
    </div>
  );
}

export default App;
