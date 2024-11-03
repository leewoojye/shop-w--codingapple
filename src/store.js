import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  // Redux의 state 변경하는 법
  // 1. state 수정해주는 함수 만들고 (export까지) 2. 원할 때 그 함수 실행해달라고 store.js에 요청
  reducers: {
    // 객체의 메서드 shorthand syntax (약식 문법)
    changeName(state) {
      // 객체 멤버를 바로 할당해도 라이브러리가 자동으로 state를 반환해준다.
      state.name = "park";
    },
    // state 변경함수에 파라미터를 뚫을수도 있음
    increase(state, a) {
      state.age += a.payload;
    },
  },
});

// state 변경함수들만 남음, user만 export해서 console.log(state) 찍어보면 key-value 값만 출력됨 (user.reducer에는 user.actions가 포함되어있지않다)
export let { changeName, increase } = user.actions;

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addAmount(state, a) {
      let prouct = state.find((x) => x.id == a.payload);
      prouct.count += 1;
    },
    addProduct(state, a) {
      // state.push({
      //   id: action.payload.id,
      //   name: action.payload.title,
      //   count: 1,
      // });
      // return [...state, { id: a.payload.id, name: a.payload.title, count: 1 }];
      let copy = [
        ...state,
        { id: a.payload.id, name: a.payload.title, count: 1 },
      ];
      return copy;
    },
  },
});

export let { addAmount, addProduct } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
