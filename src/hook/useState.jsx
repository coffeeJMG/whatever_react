import render from "../utils/render";


let currentComponent = null;
let states = new Map();

const useState = (initState)=>{

  let state = initState;

  const setState = (newState)=>{

      state = newState;
      render();
  }

  return [ state, setState]

}

export default useState