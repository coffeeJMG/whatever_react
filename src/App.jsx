import createElement from './mission1_3/CreateElement.jsx';
import Header from './mission1_3/Header.jsx';
import Home from './mission1_3/Home.jsx';
import render from './mission1_3/Render.jsx';

const App = () => (
    <div className="app">
      <Header />
      <Home />
    </div>
);

export default App;

render(<App />, document.getElementById('root'));
