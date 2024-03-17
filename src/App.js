import React, { useState, useEffect, useId } from "react";
import { useToggle, useAntdTable } from "ahooks";

export default () => {
  const [state, { toggle }] = useToggle();
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/68d3f380-089e-4683-ab9e-4493200198f9.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  const asyncAxiosFetch = async () => {
    let { data, error } = await axios.get(
      "https://gw.alipayobjects.com/os/bmw-prod/68d3f380-089e-4683-ab9e-4493200198f9.json"
    );

    if (!error) {
      console.log(data);
      setData(data);
    } else {
      setData([]);
    }
  };
  return (
    <div>
      <p>Current Boolean: {String(state)}</p>
      <p>
        <button onClick={() => toggle()}>Toggle</button>
      </p>
      <div>
        <code>{JSON.stringify(data, null, 2)}</code>
      </div>
    </div>
  );
};
