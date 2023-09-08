import './App.css';
import Home from './app/home/Home';

function App() {
  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }
  window.addEventListener('resize', appHeight)
  appHeight()
  return (
    <div className="">
      <Home/>
    </div>
  );
}

export default App;
