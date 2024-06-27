import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';

function App() {
  return (
    <Provider store={AppStore}>
    <div className="App">
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
