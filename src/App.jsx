import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";
import bg from "./bg.jpg";
import { useState } from "react";
// public 폴더 안에 이미지 사용할 땐 그냥 "/이미지경로"
// public 폴더는 일일이 import 할 필요 없어 이미지 같은 리소스들 넣기 좋다.
import data from "./data.js"; // 다른 파일에서 변수 가져와서 쓰기 -> import/export
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.jsx";
import axios from "axios";
import Cart from "./Cart.jsx";

function App() {
  // json 형태의 데이터의 경우 코드 길이가 길이 data.js 파일에 따로 분리해준 뒤
  // import, export를 통해 데이터를 가져온다.
  let [shoes, shoesChange] = useState(data);
  let [추가물품, 추가물품변경] = useState(false);
  let [추가버튼, 추가버튼변경] = useState("");
  // use+함수명() : 리액트 훅
  // 페이지 이동을 도와주는 리액트 훅
  let navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route />
        <Route />
      </Routes>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/detail");
                }}
              >
                Detail
              </Nav.Link>
              <Link to="/">홈</Link>
              <Link to="/detail">상세페이지</Link>
              <Link to="/cart">카트</Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
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
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      <div className="brandnew">brand new</div>
      <button
        className="sort"
        onClick={() => {
          let copy = [...shoes];
          copy.sort((a, b) => {
            // 비교 함수는 정렬 순서를 결정하기 위해 반드시 값을 반환해야 함.
            return a.title.localeCompare(b.title);
          });
          console.log("changed");
          shoesChange(copy);
        }}
      >
        사전순 정렬
      </button>
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((결과) => {
              // 로딩중 띄우기
              console.log(결과.data);
              추가물품변경(true);
              추가버튼변경(결과.data);
              // 로딩중 숨기기
            })
            .catch(() => {
              console.log("failed");
              // 로딩중 숨기기
            });
        }}
      >
        더보기
      </button>

      {/*
    <Container className='container'>
      <Row className='row'>
        <Col className='col1'>
        <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='80%'></img>
        <h4>{shoes[0].title}</h4>
        </Col>
        <Col className='col2'><img src='https://codingapple1.github.io/shop/shoes2.jpg' width='80%'></img>
        <h4>{shoes[1].title}</h4>
        </Col>
        <Col className='col3'><img src='https://codingapple1.github.io/shop/shoes3.jpg' width='80%'></img>
        <h4>{shoes[2].title}</h4>
        </Col>
      </Row>
    </Container>
    */}
      <Routes>
        <Route
          path="/"
          element={
            <Container className="container2">
              <Row>
                {shoes.map(function (a) {
                  // return() 안넣었는데 에러를 뱉지 않았다..
                  return <Item a={a}></Item>;
                })}
              </Row>
              <Row>
                {/* 추가물품에 대한 state를 별도로 선언하는 대신 shoes state를 변경시키는 방법도 있음
                concat()-문자열이나 배열을 합쳐주는 함수 */}
                {추가물품 == true
                  ? 추가버튼.map(function (a) {
                      return <Item a={a} />;
                    })
                  : null}
              </Row>
            </Container>
          }
        ></Route>
        {/* <Route path="/detail" element={<Detail shoes={shoes}/>} /> */}
        {/* 페이지 여러개 만들고 싶으면 :URL 파라미터 써도 됨
         */}
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route
          className="container"
          path="/about"
          element={
            <>
              <div>상세정보</div>
              <Outlet></Outlet>
            </>
          }
        >
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
        <Route
          path="/event"
          element={
            <>
              <div>오늘의 이벤트</div>
              <Outlet></Outlet>
            </>
          }
        >
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />{" "}
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지입니다</div>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

function Item(props) {
  return (
    <>
      <Col className="col1">
        <img src={props.a.url} width="80%"></img>
        {/* 복잡한 자료에서 데이터 뽑을 땐 시작기호만 잘 보면 됩니다 */}
        <h4>{props.a.title}</h4>
        <p>{props.a.price}</p>
      </Col>
    </>
  );
}

export default App;
