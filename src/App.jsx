import './App.css'

function App() {

  const buttonPress = (symbol) => {

  }

  return (
    <div className="container">
      <h1>Calculator App</h1>
      <div className="calculator">
        <div className="display">
          <div className="answer">0</div>
          <div className="expression">symbol</div>
        </div>
        <button id="clear" onClick={() => buttonPress("clear")}>AC</button>
        <button id="negative" onClick={() => buttonPress("negative")}>+/-</button>
        <button id="percentage" onClick={() => buttonPress("percentage")}>%</button>
        <button id="divide" onClick={() => buttonPress("/")}>/</button>
        <button id="seven" onClick={() => buttonPress("7")}>7</button>
        <button id="eight" onClick={() => buttonPress("8")}>8</button>
        <button id="nine" onClick={() => buttonPress("9")}>9</button>
        <button id="multiply" onClick={() => buttonPress("*")}>x</button>
        <button id="four" onClick={() => buttonPress("4")}>4</button>
        <button id="five" onClick={() => buttonPress("5")}>5</button>
        <button id="six" onClick={() => buttonPress("6")}>6</button>
        <button id="substract" onClick={() => buttonPress("-")}>–</button>
        <button id="one" onClick={() => buttonPress("1")}>1</button>
        <button id="two" onClick={() => buttonPress("2")}>2</button>
        <button id="three" onClick={() => buttonPress("3")}>3</button>
        <button id="add" onClick={() => buttonPress("+")}>+</button>
        <button id="zero" onClick={() => buttonPress("0")}>0</button>
        <button id="decimal" onClick={() => buttonPress(".")}>.</button>
        <button id="equals" onClick={() => buttonPress("=")}>=</button>
      </div>
    </div>
  )
}

export default App
