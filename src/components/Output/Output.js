import React from "react";
import PropTypes from "prop-types";
import "./Output.css";

function Output(props) {
  const { hex } = props;

  const result =
    hex &&
    `rgb(${parseInt(hex.slice(1, 3), 16)}, ${parseInt(
      hex.slice(3, 5),
      16
    )}, ${parseInt(hex.slice(5), 16)})`;

  return (
    <div className='hex2rgb-result-box'>
      {result === null ? "Ошибка!" : result}
    </div>
  );
}

export default Output;

Output.defaultProps = {
  hex: "Ошибка!",
};

Output.propTypes = {
  hex: PropTypes.string,
};