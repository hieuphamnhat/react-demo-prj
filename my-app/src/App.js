import './App.css';
import Hello from './components/Hello';
import CounterFeature from './features/Counter';
import { Redirect, Route, Switch } from 'react-router-dom';
import CalculatorFeature from './features/Calculator'
import ColorBox from './components/ColorBox';
function App() {
  return (
    <div className="App">
      <CounterFeature />
      <CalculatorFeature />
      <ColorBox />
    </div>
  );
}

export default App;
