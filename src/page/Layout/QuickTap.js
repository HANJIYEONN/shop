import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import penguinD from "../Main/penguinData";
import { useNavigate } from "react-router-dom";

function QuickTap() {
  const [currentPosition, setCurrentPosition] = useState(500);
  let [penguinData] = useImmer(penguinD);
  const navigate = useNavigate();

  //스크롤
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 500;
      setCurrentPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //상품
  const viewItem = () => {
    const watchedItem = JSON.parse(localStorage.getItem("watched"));

    return (
      <>
        {watchedItem.map((item, i) => {
          let _item = penguinData.find((x) => x.id == item);
          return (
            <img
              src={process.env.PUBLIC_URL + _item.img}
              onClick={() => goDetail(item)}
            />
          );
        })}
      </>
    );
  };

  const goDetail = (id) => {
    navigate("/detail/" + id);
  };

  return (
    <>
      <div className="quickmenu" style={{ top: `${currentPosition}px` }}>
        <h6 style={{ fontWeight: "bold" }}>최근 본 펭귄</h6>
        {/* <p className="no-prd">상품이 없습니다.</p> */}
        <div className="quickTap">{viewItem()}</div>
      </div>
    </>
  );
}

export default QuickTap;
