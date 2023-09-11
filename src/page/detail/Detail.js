import { useParams } from "react-router-dom";
import { useImmer } from "use-immer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import penguinD from "../Main/penguinData";
import { createContext, useEffect, useState } from "react";
import DetailTap from "./DetailTab";
import { useDispatch } from "react-redux";
import { addCart } from "../../Store/cartSlice";

export let Context1 = createContext();

function Detail(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [penguinData] = useImmer(penguinD);
  let [count, setCount] = useState(0);
  let [hide, setHide] = useState(false);
  let [text, setText] = useState("");
  let { id } = useParams();
  const [fade, setFade] = useState("");

  if (!id) id = 0;
  let item = penguinData.find((x) => x.id == id);

  const addCartItem = () => {
    dispatch(addCart(item));

    if (window.confirm("장바구니로 이동하시겠습니까?")) {
      navigate("/cart");
    }
  };

  useEffect(() => {
    if (isNaN(text)) {
      alert("숫자만 입력해주세요.");
      setText("");
    }
  }, [text]);

  useEffect(() => {
    let _item = setTimeout(() => {
      setHide(true);
    }, 2000);

    const storedIds = localStorage.getItem("watched")
      ? JSON.parse(localStorage.getItem("watched"))
      : [];

    storedIds.push(id);

    localStorage.setItem("watched", JSON.stringify(storedIds));

    return () => {
      clearTimeout(_item);
    };
  }, []);
  // []없으면 mount update 시 실행 []있으면 mount시에만 실행

  useEffect(() => {
    let timeout = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout(timeout);
      setFade("");
    };
  }, []);

  return (
    <>
      <div className={"container start " + fade}>
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
            <button
              className="btn btn-success"
              onClick={() => {
                addCartItem();
              }}
            >
              후원하기
            </button>
          </div>
        </div>
        <Context1.Provider value={{ penguinData }}>
          <DetailTap />
        </Context1.Provider>
      </div>
    </>
  );
}
export default Detail;
