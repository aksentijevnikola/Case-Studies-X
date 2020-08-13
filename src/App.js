import React from 'react';
import './App.css';
import { WebContextProvider } from './context/Context';
import Homepage from './components/pages/homepage.component'
function App() {
  return (
    <WebContextProvider>
        <Homepage />
    </WebContextProvider>
  );
}

export default App;
