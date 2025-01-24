import Todo from './components/Todo.jsx';
import render from './utils/render.js';

const App = () => (
    <div className="app">
      <Todo/>
    </div>
);

export default App;

render(<App />, document.getElementById('root'));
