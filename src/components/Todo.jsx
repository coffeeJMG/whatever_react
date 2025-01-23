import useState from "../hook/useState";
import styles from "./style.module.css"

const Todo = () => {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState([])


  const handleInput = (e) => {
    setValue(e.target.value);
  };


  const handleAddTodo = () => {

      if (value.trim() !== '') {

          setTodos([...todos, value]);
          setValue("");

      }
  }

  const handleKeyDown = (e) => {

    if (e.key === 'Enter') {
      handleAddTodo();
    }

  };

  const handleRemoveTodo = (index) => {

    // 현재 todos 배열에서 클릭한 인덱스의 항목만 제거
    setTodos(todos => {
      return todos.filter((todo, currentIndex) => {
        return currentIndex !== index; // 클릭한 index와 다른 항목만 남김
      });
    });
   };

  return (
      <>
          <div className={styles.container}>
              <h1>Todo List</h1>
              <div className={styles.todoForm}>
                  <input
                      type="text"
                      onInput={handleInput}
                      value={value}
                      onKeyDown={handleKeyDown}
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
                          <img src="../public/close.svg" alt="리스트 삭제" className={styles.closeImg} onClick={()=>handleRemoveTodo(index)}/>
                      </li>

                  ))}
              </ul>
          </div>
      </>
  )
}

export default Todo