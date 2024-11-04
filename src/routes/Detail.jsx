import React, { useEffect } from "react";
import "../App.css";
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
import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";
import data from "../data.js";
import { useDispatch, useSelector } from "react-redux";
import { addAmount, addProduct } from "../store";
// import styled from "styled-component";

// styled-component 는 app.css 와 달리 다른 js파일들에게 영향을 주지 않음(리액트 파일들은 나중에 같은 확장자의 파일들끼리 합쳐짐 이 과정에서 app.css 내용이 다른 js파일에도 영향을 줄 수 있음)
// 한편 app.css가 app.js에만 영향을 주고 받게 하고 싶다면 컴포넌트.module.css로 작명
// let yellobtn = styled.button`
// background : yellow;
// color : ${ props=>props.bg=='blue' ? 'white' : 'black' };
// padding : 10px;
// `
// // props로 컴포넌트 재활용  가능
// let box = stlyed.div`
// background : ${ props => props.bg };
// padding : 20px;
//`
// 기존 스타일 복사 가능
//let newbtn=styled.button(yellobtn);

function hasNonNumericCharacters(input) {
  // 정규 표현식: 숫자가 아닌 문자가 하나라도 있는지 확인
  const nonNumericPattern = /[^0-9]/;
  // 정규표현식 객체의 test() : 주어진 문자열이 정규표현식에 매치되는지 검사
  return nonNumericPattern.test(input);
}

function Detail(props) {
  // 유저가 URL 파라미터에 입력한 거 가져오려면
  let { id } = useParams();
  // let 찾은상품 = props.shoes.find(x=>x.id==id);
  // URL 파라미터는 주로 React Router와 함께 사용되어 URL의 일부로 정보를 전달하는 방법이다. 이를 통해 특정 페이지나 컴포넌트에 필요한 데이터를 URL을 통해 전달할 수 있다.

  useEffect(() => {
    // let parseddata = localStorage.getItem("watched");
    // parseddata = new Set(parseddata ? JSON.parse(parseddata) : []);
    let parseddata = new Set(JSON.parse(localStorage.getItem("watched")));
    // storedData가 null일 경우 빈 배열로 초기화
    // let parseddata = new Set(storedData.map((item) => JSON.stringify(item)));
    parseddata.add(data[id]);

    console.log(data[id]);
    console.log([...parseddata]);

    localStorage.setItem("watched", JSON.stringify([...parseddata]));

    console.log("Stored watched data:", localStorage.getItem("watched"));
  }, [data, id]);

  let [sales, salesChange] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      salesChange(false);
    }, 2000);
  }, []);
  let [input, inputChange] = useState("");
  let [warning, warningChange] = useState(false);
  useEffect(() => {
    if (hasNonNumericCharacters(input)) {
      warningChange(true);
    } else {
      warningChange(false);
    }
  });
  let [탭, 탭변경] = useState(0);

  let state = useSelector((state) => {
    return state;
  });
  // store.js에게 요청을 보내는 함수
  let dispatch = useDispatch();

  return (
    <>
      <div className="container">
        {sales ? (
          <div className="alert alert -warning">2초이내 구매시 할인</div>
        ) : (
          <div></div>
        )}
        <div className="row">
          <div className="col-md-6">
            <img src={data[id].url} width="100%" />
          </div>
          {warning ? <div>그러지 마세요</div> : null}
          <input
            onChange={(e) => {
              inputChange(e.target.value);
            }}
          />
          <div className="col-md-6">
            <h4 className="pt-5">{data[id].title}</h4>
            <p>{data[id].content}</p>
            <p>{data[id].price}</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(addProduct(data[id]));
                console.log(state.cart);
              }}
            >
              주문하기
            </button>
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link
              eventKey="link0"
              onClick={() => {
                탭변경(0);
              }}
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link1"
              onClick={() => {
                탭변경(1);
              }}
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link2"
              onClick={() => {
                탭변경(2);
              }}
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent 탭={탭} />
      </div>
    </>
  );
}

function TabContent({ 탭 }) {
  // if 조건문 대신 배열로 분기 가능
  let [fade, setfade] = useState("");
  useEffect(() => {
    let a = setTimeout(() => {
      setfade("end");
    }, 100);
    return () => {
      clearTimeout(a);
      setfade("");
    };
  }, [탭]); // 탭 state가 변할 때마다 end를 부착하도록 작동
  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}
// JSX 내 삼항연산자는 한개밖에, 조건문은 아예 못쓴다고함

export default Detail;
