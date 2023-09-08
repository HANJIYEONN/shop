import { useContext, useEffect, useState } from "react";

import { Context1 } from "./Detail.js";

function TabContent({ tab }) {
  const [fade, setFade] = useState("");

  let { penguinData } = useContext(Context1);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout(timeout);
      setFade("");
    };
  }, [tab]);

  return (
    <div className={"start " + fade}>
      {
        [<div>{penguinData[0].title}</div>, <div>내용1</div>, <div>내용2</div>][
          tab
        ]
      }
    </div>
  );
}
export default TabContent;
