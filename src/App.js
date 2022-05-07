import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [listOfNames, setListOfNames] = useState([]);
  
  //...listOfNames means that we want everything that is inside of that array.

  return (
    <div className='App'>
      <input type='text' onChange={(event) => {
        setName(event.target.value)
      }} />
      <button onClick={() => {
        setName(name)
        setListOfNames([...listOfNames, name])
        console.log(...listOfNames)
        }}>Add name</button>
      {listOfNames.map((value, key) => <h1 key={key}>{value}</h1>)}
    
    </div>
  );
}

export default App;
