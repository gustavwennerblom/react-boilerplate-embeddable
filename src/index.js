import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const runScript = () => {
  ReactDOM.render(<App />, document.getElementById('react-entry'))
};

// `DOMContentLoaded` may fire before your script has a chance to run, so check before adding a listener
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runScript);
} else {
  // `DOMContentLoaded` already fired
  runScript();
}
