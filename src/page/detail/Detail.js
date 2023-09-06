import { useParams } from "react-router-dom";
import { useImmer } from "use-immer";
import styled from "styled-components";

import penguinD from "../Main/penguinData";

function Detail(props) {
  let [penguinData] = useImmer(penguinD);
  let { id } = useParams();

  let item = penguinData.find((x) => x.id == id);

  let Btn = styled.button`
    background: ${(props) => props.bg};
    color: ${(props) => (props.bg === "blue" ? "white" : "black")};
    padding: 10 px;
  `;

  let NewBtn = styled.button(Btn)`
    padding: 20 px;
  `;

  let BlackBox = styled.div`
    backgrousd: grey;
    padding: 20px;
  `;

  return (
    <>
      <div className="container">
        <BlackBox>
          <Btn bg="yellow">버튼</Btn>
          <Btn bg="blue">버튼</Btn>
        </BlackBox>
        <div className="row">
          <div className="col-md-6">
            <img src={process.env.PUBLIC_URL + item.img} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{item.title}</h4>
            <p>펭귄설명</p>
            <p>{item.contect}</p>
            <button className="btn btn-success">후원하기</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Detail;