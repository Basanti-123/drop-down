import { useState } from "react";

const Child = ({ setValue }) => {
  return (
    <>
      I am Child
      <br />
      <br />
      <br />
      <input
        placeholder="Child component input to set the parent value"
         size={50}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default function Parent({}) {
  const [value, setValue] = useState("I am parent");
  return (
    <div>
      {value}
      <br />
      <br />
      <br />
      <br />
      <br />
      <Child setValue={setValue} />
    </div>
  );
}
