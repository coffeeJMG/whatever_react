import useState from "../hook/useState";
import styles from "./style.module.css"

const Todo = () => {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState([])

  const onChange = (e) => {
      setValue(e.target.value);
  }

  const onSubmit = (e) => {
      e.preventDefault();


        // 빈 문자열 체크
      if (value.trim() !== '') {

          // 기존 todos에 새로운 value 추가
          setTodos([...todos, value]);
          setValue("");
      }
  }

  return (
      <>
          <div className={styles.container}>
              <h1>Todo List</h1>
              <form className={styles.todoForm} onSubmit={onSubmit}>
                  <input
                      type="text"
                      onChange={onChange}
                      value={value}
                      placeholder="할 일을 입력하세요"
                  />
                  <button type="submit">입력</button>
              </form>

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
export default Todo;