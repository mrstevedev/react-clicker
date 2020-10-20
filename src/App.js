import React, { useState } from 'react';
import plaza_1 from './plaza1.gif';
import plaza_2 from './plaza2.gif'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const handleClickCount = (e) => {
    setCounter(prevCount => prevCount + 1);
  }

  if(counter === 3) {
    console.log('count reached three clicks');
  }

  console.log(counter)

  return (
    <div className="container">
      <p>Aubrey was clicked { counter } times.</p>
      { counter === 3  ? (
        <img src={ plaza_1 } alt="aubrey plaza" />
      ) : (
        <img src={ plaza_2 } onClick={ handleClickCount } alt="aubrey plaza" />
      ) }
    </div>
  );
}

export default App;
