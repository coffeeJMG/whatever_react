import useState from "../hook/useState";

const Counter = () => {
  const [count, setCount] = useState(0)
  const [secondCount, setSecondCount] = useState(0)

  const handleCountClick = () => {

      setCount(count => count + 1)
  }

  const secondCountClick = ()=>{

    setSecondCount (count => count+1)
  }

  return (
      <>
          <div>
              {count}<button onClick={handleCountClick}>증가</button>
              {secondCount}<button onClick={secondCountClick}>증가</button>
          </div>
      </>
  )
}

export default Counter;