import React, { useState } from "react";

function TextArea(prop) {
  const [text, setText] = useState("");

  function handleUpClick() {
    setText(text.toUpperCase());
  }

  function handleLoClick() {
    setText(text.toLowerCase());
  }

  function handleChange(e) {
    setText("");
    setText(e.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="mb-3 my-4">
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleChange}
            placeholder="Write here"
            rows="8"
            style={{
              backgroundColor: prop.mode === "dark" ? "black" : "white",
              color: prop.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button
          className={`btn btn-${prop.mode === "dark" ? "light" : "dark"}`}
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          className={`btn btn-${prop.mode === "dark" ? "light" : "dark"} mx-2`}
          onClick={handleLoClick}
        >
          Convert to lowercase
        </button>

        <h2>Summary</h2>
        <p>
          Your text has {text.split(" ").length} words and {text.length}{" "}
          charecters{" "}
        </p>
        <br />
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextArea;
