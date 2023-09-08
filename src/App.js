import './App.css';
import {
  Outlet,
  Link
} from '@tanstack/react-router';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link><br/>
        <Link to="/books">Books</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
