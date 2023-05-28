import React, { useState } from "react";


const Selection = (props) => {

    let { id, selectionStyle } = props;
  
    const [backgroundStyle, setBackgroundStyle] = useState("");

    function handleClick() {
        setBackgroundStyle(selectionStyle.background);
    }

    return (
        <div className="fix-box" id={id} onClick={handleClick} style={{ background: backgroundStyle }}  >
        <p className="subheading">Selection</p>
      </div>
    )

}

export default Selection;
