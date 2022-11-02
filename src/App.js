import './App.css';
import MarkdownInput from './Components/MarkdownInput';
import Preview from './Components/Preview';
import { useState } from 'react';



function App() {

  const [childvalue, setChildValue] = useState("# markdown compiler");

  const getvalue = v => {
    setChildValue(v);
  }

  return (
    <div className="App">
      <div className='App_input'>

        <MarkdownInput getvalue={getvalue} />
        <Preview childvalue={childvalue} />
      </div>
    </div>
  );
}

export default App;
