import { memo } from "react";

//메모는  props를 비교해서 렌더함(props가 복잡할수록 효율성 저하)
// 무거운 컴포넌트에 사용
let Child = memo(function (props) {
  console.log("재렌더링됨");
  return <div>{props.count}</div>;
});

export default Child;
