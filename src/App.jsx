import { useEffect, useState, useRef } from "react";
import "./App.css";

const NumOfInputDigit = 5;

function App() {
  const [inputVal, setInputVal] = useState(new Array(NumOfInputDigit).fill(""));
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  function handleChange(value, index) {
    if (isNaN(value)) return;

    let newVal = [...inputVal];
    newVal[index] = value.slice(-1);

    setInputVal(newVal);
    refArr.current[index + 1]?.focus();
    console.log(value, inputVal);
  }

  function hadleKeyDown(e, index) {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  }

  return (
    <>
      <div>
        {inputVal.map((item, index) => {
          return (
            <input
              key={index}
              style={{
                height: "40px",
                width: "40px",
                fontSize: "30px",
                alignItems: "center",
                textAlign: "center",
              }}
              type="text"
              value={inputVal[index]}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => hadleKeyDown(e, index)}
              ref={(input) => (refArr.current[index] = input)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
