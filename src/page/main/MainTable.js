function MainTable(props) {
  return (
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + props.img} width="80%" height="80%" />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  );
}

export default MainTable;
