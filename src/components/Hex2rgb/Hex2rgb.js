import React from "react";
import Input from "../Input/Input";
import Output from "../Output/Output";
import "./Hex2rgb.css";

const defaultHex = "#ffffff";

function Hex2rgb(props) {
  const [hex, setHex] = React.useState(defaultHex);
  const [value, setValue] = React.useState(defaultHex);

  const handleChange = (value) => {
    if (/#[a-f0-9]{6}\b/gi.test(value)) setHex(value);
    setValue(value);
  };

  return (
    <div className='hex2rgb' style={{ backgroundColor: hex }}>
      <Input value={value} onChange={handleChange} />
      <Output hex={hex === value ? hex : null} />
    </div>
  );
}

export default Hex2rgb;