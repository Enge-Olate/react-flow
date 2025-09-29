import { useState } from 'react';
import './App.css'

function App() {
const nome = 'Olate';
const lista = ['banana', 'limão', 'abacate'];
const [name, setNname] = useState('');
  return (
    <>
      <h1 className='nome'>{nome}</h1>
      <ul>
        {lista.map(item=>(
          <li key={item}>{item}</li>
        ))}
      </ul>
      <input type="text"
        value={name}
        onChange={name2 =>{setNname(name2.target.value)}}
      />
      <h2>{name}</h2>
    </>
  )
}

export default App
