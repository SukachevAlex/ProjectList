import * as React from 'react';
import './App.css';
import { List } from './components/common/List/List';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

export default App;
