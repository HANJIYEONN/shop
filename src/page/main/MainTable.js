import { useNavigate } from "react-router-dom";

function MainTable(props) {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate("/detail/" + props.id);
  };

  return (
    <div className="col-md-4" onClick={() => goDetail()}>
      <img src={process.env.PUBLIC_URL + props.img} width="80%" height="80%" />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  );
}

export default MainTable;
