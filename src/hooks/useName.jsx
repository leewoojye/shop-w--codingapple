import axios from "axios";
import { useState } from "react";

export function useName() {
  let [name, setName] = useState("");
  axios.get("/username.json").then((r) => {
    // axios의 반환값은 데이터 객체로, dot연산자로 data멤버에 접근해야함.
    setName(r.data);
  });
  return [name, setName];
}

// export function useUsername(){
//   let [username, setUsername] = useState('');
//   useEffect(()=>{
//     axios.get('/username.json').then((r)=>{
//       setUsername(r.data)
//     })
//   },[])
//   return username;
// }
