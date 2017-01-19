import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';

// Stylesheets
require('./styles/app.scss');

window.onload = () => {
   ReactDOM.render(<Main onUpdate={() => window.scrollTo(0, 0)} />,
   document.getElementById('main'));
};
