import { memo } from "react";

let Child = memo(function (props){
    console.log("재렌더링됨")
    return <div>{props.count}</div>
})

export default Child;