import MainTable from "./MainTable";
import { useImmer } from "use-immer";
import penguinData from "./penguinData";
import axios from "axios";

function Main() {
  // let [penguinData] = useImmer(penguinD);

  const penguinCards = penguinData?.map((penguin, index) => (
    <MainTable
      key={index}
      id={penguin.id}
      img={penguin.img? penguin.img: "/img/아델리펭귄.jpg"}
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
              result.data.forEach((penguin, index) => {
                penguinData.push(penguin); // Add data to the penguinData array.
              });
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
