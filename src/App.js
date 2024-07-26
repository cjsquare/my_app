import { useState } from 'react';
import './App.css';

function App() {
  const [info, setInfo] = useState('Hello World')
  
  return (
    <>
    <div >
      {info}
      {/* jk */}
    </div>
    </>
  );
}

export default App;
