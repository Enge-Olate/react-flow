import { useEffect, useState } from 'react';
import ButtonPrimary from './components/button/ButtonPrimary';
import './styles/global.css';

function App() {
const nome = 'Olate';
const lista = ['banana', 'limão', 'abacate'];
const [name, setNname] = useState('');

useEffect(()=>{
  console.log('nome mudou');
},[name])
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
        <ButtonPrimary/>
    </>
  )
}

export default App
