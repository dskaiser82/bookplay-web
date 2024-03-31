import Home from '../../Home/Home';
import './App.scss';

export default function App() {
  return (
    <div>
      <img className="wolf-bg" src="/wolf/img/art.png" />
      <header className="app-header">
        <Home />
      </header>
    </div>
  );
}
