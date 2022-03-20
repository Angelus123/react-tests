import React, { useState } from 'react';
import './App.css';
import Input from './Component/Input/Input';
import Button from './Component/Button/Button';

function App() {
  const [showDiv] = useState(true);
  return (
    <div className="App">
      <Input />
      <Button showDiv={showDiv} />
    </div>
  );
}

export default App;
