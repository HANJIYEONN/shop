import MainTable from "./MainTable";
import { useImmer } from "use-immer";
import penguinD from "./penguinData";
import axios from "axios";

function Main() {
  let [penguinData] = useImmer(penguinD);

  const penguinCards = penguinData?.map((penguin, index) => (
    <MainTable
      key={index}
      id={penguin.id}
      img={penguin.img}
      title={penguin.title}
      content={penguin.content}
    />
  ));

  return (
    <>
      <div className="main-bg">
        <img
          src={process.env.PUBLIC_URL + "/img/바탕화면.jpg"}
          className="main-pg"
        />
      </div>
      <br />
      <div className="container">
        <div className="row">{penguinCards}</div>
      </div>
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((result) => {
              console.log("data", result.data);
            })
            .catch(() => {
              alert("오류가 발생했습니다.");
            });
        }}
      >
        버튼
      </button>
    </>
  );
}
export default Main;
