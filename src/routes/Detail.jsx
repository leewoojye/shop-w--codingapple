import React from "react";
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
import { Routes, Route, Link, useNavigate, Outlet, useParams } from "react-router-dom";
import data from "../data.js";

function Detail(props) {

// 유저가 URL 파라미터에 입력한 거 가져오려면
let {id}=useParams();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={data[id].url}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{data[id].title}</h4>
            <p>{data[id].content}</p>
            <p>{data[id].price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
