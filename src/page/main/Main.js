import MainTable from "./MainTable";
import { useImmer } from "use-immer";
import penguinD from "./penguinData";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Main() {
  let [penguinData, setPenguinData] = useState(penguinD);
  let [count, setCount] = useState(2);

  const penguinCards = penguinData?.map((penguin, index) => (
    <MainTable
      key={index}
      id={penguin.id}
      img={penguin.img ? penguin.img : "/img/아델리펭귄.jpg"}
      title={penguin.title}
      content={penguin.content}
    />
  ));

  const addItem = () => {
    if (count > 3) {
      alert("마지막 상품입니다.");
      return false;
    }
    axios
      .get("https://codingapple1.github.io/shop/data" + count + ".json")
      .then((result) => {
        let copy = [...penguinData, ...result.data];
        setPenguinData(copy);
        setCount(count + 1);
      })
      .catch(() => {
        alert("오류가 발생했습니다.");
      });
  };

  return (
    <>
      <div>
        <div className="main-bg">
          <img
            src={process.env.PUBLIC_URL + "/img/바탕화면.jpg"}
            className="main-pg"
          />
        </div>
        <br />
        <div className="container">
          <div className="row">{penguinCards}</div>
          <div className="d-grid gap-2">
            <Button variant="secondary" size="lg" onClick={() => addItem()}>
              버튼
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
