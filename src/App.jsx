
import Counter from './components/Counter.jsx';
import render from './utils/render.js';

const App = () => (
    <div className="app">
      <Counter/>
    </div>
);

export default App;

render(<App />, document.getElementById('root'));
