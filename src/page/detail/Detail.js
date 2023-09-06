import { useParams } from "react-router-dom";
import { useImmer } from "use-immer";
import styled from "styled-components";

import penguinD from "../Main/penguinData";
import { useEffect, useState } from "react";

function Detail(props) {
  let [penguinData] = useImmer(penguinD);
  let [count, setCount] = useState(0);
  let [hide, setHide] = useState(false);
  let [text, setText] = useState("");
  let { id } = useParams();

  if (!id) id = 0;
  let item = penguinData.find((x) => x.id == id);

  useEffect(() => {
    if (isNaN(text)) {
      alert("숫자만 입력해주세요.");
      setText("");
    }
  }, [text]);

  useEffect(() => {
    let item = setTimeout(() => {
      console.log("바위뛰기펭긴은 동서남북부 별로 있다.");
      setHide(true);
    }, 2000);

    return () => {
      clearTimeout(item);
    };
  }, []);
  // []없으면 mount update 시 실행 []있으면 mount시에만 실행

  return (
    <>
      <div className="container">
        {!hide && (
          <div id="sale" className="alert alert-warning">
            2초 이내 후원시 선물
          </div>
        )}
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          버튼
        </button>
        <div className="row">
          <div className="col-md-6">
            <img src={process.env.PUBLIC_URL + item.img} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{item.title}</h4>
            <p>펭귄설명</p>
            <p>{item.contect}</p>
            <p>
              <input
                type="text"
                className="alert alert-primary"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
            </p>
            <button className="btn btn-success">후원하기</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Detail;
