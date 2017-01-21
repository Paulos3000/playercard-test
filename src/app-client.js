import React from 'react';
import ReactDOM from 'react-dom';

// Styles...
import './styles/app.scss';

// Main Component...
import Main from './components/Main';

window.onload = () => {
   ReactDOM.render(<Main onUpdate={() => window.scrollTo(0, 0)} />,
   document.getElementById('main'));
};
