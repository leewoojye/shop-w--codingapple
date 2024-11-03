import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, increase, addAmount } from "./store";

function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  // store.js에게 요청을 보내는 함수
  let dispatch = useDispatch();
  console.log(state);
  return (
    <div>
      {state.user.name} {state.user.age}의 장바구니
      <button
        onClick={() => {
          // state 변경함수 인자로 payload 전달 가능
          dispatch(increase(100));
        }}
      >
        +
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {console.log(state.cart)}
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addAmount(state.cart[i].id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
