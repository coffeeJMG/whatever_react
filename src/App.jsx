import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import render from './utils/render.js';

const App = () => (
    <div className="app">
      <Header />
      <Home />
    </div>
);

export default App;

render(<App />, document.getElementById('root'));
