import React from 'react';
import style from './assats/css/App.module.css';
import Home from "./componets/home";

class App extends React.Component {

  render () {
    return (
      <body className={style.App}>
        <Home />
      </body>
    );
  }
}

export default App;
