import { useState } from "react";

export function useLike(params) {
  let [like, setLike] = useState(0);
  function addLike() {
    setLike((a) => a + 1);
  }

  // 외부파일에서 useLike()을 import해서 사용할때, (return 없이)useLike()를 그저 호출만 하면 useLike() 내 변수/함수를 못사용하는데 지역변수는 함수외부에서 못쓰기 때문이다. 따라서 return을 통해 사용하게 해준다.
  return [like, setLike];
}
