import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import searchImage from './api'
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
searchImage()
root.render(<App />);

// 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y