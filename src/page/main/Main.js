import MainTable from "./MainTable";
import { useImmer } from "use-immer";
import penguinD from "./penguinData";

function Main() {
  let [penguinData] = useImmer(penguinD);

  const penguinCards = penguinData?.map((penguin, index) => (
    <MainTable
      key={index}
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
    </>
  );
}
export default Main;
