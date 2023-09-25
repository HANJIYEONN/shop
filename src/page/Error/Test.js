import { useState, useTransition, useDeferredValue } from "react";

let a = new Array(10000).fill(0);

function Test() {
  let [name, setName] = useState("");
  let [isPending, startTrasition] = useTransition(); //startTrasition : 늦게 처리함
  let state = useDeferredValue(state);

  return;
  <div className="Test">
    <input
      onChange={(e) => {
        startTrasition(() => {
          setName(e.target.value);
        });
      }}
    />
    {isPending
      ? "로딩중"
      : a.map(() => {
          //   return <div>{name}</div>;
          return <div>{state}</div>;
        })}
  </div>;
}
