import React from "react";

function Input({title, state, setState, label=false}) {
  return <div className="text-slate-800 flex flex-col gap-3">
    {
      label && <label htmlFor={title} className="text-large font-bold "> {title} </label>
    }
    <input className="p-2 rounded-md" type="text" value={state} name={state} onChange={(e) => setState(e.target.value)} />
  </div>;
}

export default Input;
