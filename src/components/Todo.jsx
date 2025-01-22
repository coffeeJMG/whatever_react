import useState from "../hook/useState";
import styles from "./style.module.css"


const Todo = () => {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState([])

  const handleInputChange = (e) => {
    console.log("onChange 발생:", e.target.value);
    setValue(e.target.value);
}

  const handleAddTodo = () => {
      console.log("버튼 클릭됨");
      if (value.trim() !== '') {
          console.log("현재 value:", value);
          console.log("현재 todos:", todos);
          setTodos([...todos, value]);
          setValue("");
      }
  }

  return (
      <>
          <div className={styles.container}>
              <h1>Todo List</h1>
              <div className={styles.todoForm}>
                  <input
                      type="text"
                      onChange={handleInputChange}
                      value={value}
                      placeholder="할 일을 입력하세요"
                  />
                  <button type="button" onClick={handleAddTodo}>
                      입력
                  </button>
              </div>

              <ul className={styles.list}>
                  {todos.map((todo, index) => (
                      <li key={index} className={styles.item}>
                          {todo}
                      </li>
                  ))}
              </ul>
          </div>
      </>
  )
}

export default Todo