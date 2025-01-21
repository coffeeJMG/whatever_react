

const useState = (initState)=>{

  let state = initState;

  const setState = (newState)=>{

      state = newState;
  }

  return [ state, setState]

}

export default useState