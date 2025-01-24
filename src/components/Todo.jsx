import useState from '../hook/useState';
import styles from './style.module.css';
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (value.trim() !== '') {
      setTodos((prev) => [...prev, { id: uuidv4(), text: value }]);
      setValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleRemoveTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
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
        {todos.map((todo) => (
          <li key={todo.id} className={styles.item}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>
              <img
                src="/close.svg"
                alt="리스트 삭제"
                className={styles.closeImg}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
