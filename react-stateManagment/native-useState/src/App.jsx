import { useState } from "react";

function NameList() {
  const [list, setList] = useState(["labib", "habib", "rifat"]);
  const [name, setName] = useState("");

  const onAddname = () => {
    if (name !== "") {
      setList([...list, name]);
      setName("");
    }
  };

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddname}>Add Name</button>
    </div>
  );
}

function Counter() {
  const [count, setCoutn] = useState(10);
  function addOne() {
    setCoutn(count + 1);
  }

  function subOne() {
    setCoutn(count - 1);
  }

  return (
    <div className="App" style={{ display: "flex" }}>
      <button onClick={addOne}>++</button>
      <p>{count}</p>
      <button onClick={subOne}>--</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  );
}

export default App;
