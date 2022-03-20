import React, { useState } from 'react';
import './App.css';
import Input from './Component/Input/Input';
import Button from './Component/Button/Button';

function App() {
  const [showDiv] = useState(true);
  const role = 'appInfo';
  return (
    <div className="App" role={role}>
      <Input />
      <Button showDiv={showDiv} />
    </div>
  );
}

export default App;
