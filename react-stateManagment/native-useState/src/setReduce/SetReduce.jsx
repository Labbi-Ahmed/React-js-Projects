import { useReducer } from "react";

function UserForm() {
  const [state, dispatch] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {
      first: "",
      last: "",
    }
  );

  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />

      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <div>First: {state.first}</div>
      <div>Last: {state.last}</div>
    </div>
  );
}

function Reducer() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.paylod };
        case "ADD_NAME":
          return { ...state, names: [...state.names, state.name], name: "" };
      }
    },
    {
      names: [],
      name: "",
    }
  );

  return (
    <div>
      <div>
        {state.names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>

      <input
        type="text"
        value={state.name}
        onChange={(e) => dispatch({ type: "SET_NAME", paylod: e.target.value })}
      />
      <button onClick={() => dispatch({ type: "ADD_NAME" })}>ADD Name</button>
    </div>
  );
}

function SetReduce() {
  return (
    <div className="App">
      <h1>This is setReduce</h1>
      <UserForm />
      <Reducer />
    </div>
  );
}

export default SetReduce;
