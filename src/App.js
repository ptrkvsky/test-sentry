import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const RELEASE = '0.1.0';

  Sentry.init({
    dsn:
      'https://8d6259633fb64e91aaa9b6ad76a422d7@o451965.ingest.sentry.io/5438682',
    release: RELEASE,
  });

  const handleClick = () => {
    try {
      throw new Error('Caught');
    } catch (err) {
      console.error(error);
      Sentry.captureException(err);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <button onClick={handleClick}>Error</button>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
