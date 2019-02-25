import React from "react";
import ReactDOM from "react-dom";

// synthetic events -- supported events -

const app = {
  options: ["one"]
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  console.log(option);
  if (option) {
    app.options.push(option);
  }
  render();
};

const reNew = () => {
  app.options = [];
  render();
};

const makeDecision = () => {
  const ranNum = Math.floor(Math.random() * app.options.length);
  const opt = app.options[ranNum];
  alert(opt);
  console.log(ranNum);
};

const numbers = [44, 101, 1000];

const render = () => {
  const template = (
    <div>
      <button disable={app.options.length === 0} onClick={makeDecision}>
        Pick one
      </button>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
      <button onClick={reNew}>ReNew</button>
      <ol>
        {app.options.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ol>
    </div>
  );
  ReactDOM.render(template, document.getElementById("root"));
};

render();
