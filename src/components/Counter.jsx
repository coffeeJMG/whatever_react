import useState from "../hook/useState";

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
      setCount(count => count + 1)
  }

  return (
      <>
          <div>
              {count}
              <button onClick={handleClick}>증가</button>
          </div>
      </>
  )
}

export default Counter;