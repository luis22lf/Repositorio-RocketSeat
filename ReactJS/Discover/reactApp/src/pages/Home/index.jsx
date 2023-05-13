import React, {useState, useEffect} from 'react' /*usestate permite criar estado, necessário para alterar dados da página (uma variável não é capaz de fazer isso)*/

import './styles.css'

import { Card } from '../../components/Card'

 function Home() {
  const [studentName, setStudentName] = useState() //criando estado (vetor de duas posições const [destinoOndeVaiSalvar, funçãoQueVaiAtualizarEstado])
  const [students, setStudents] = useState([]) //imutabilidade
  const [user, setUser] = useState({name:'', avatar:''})

 function handleAddStudent() {//quando executado, cria um objeto com nome e data atual
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour:"2-digit",
        minute:"2-digit",
        second:'2-digit',
      })
    };

  setStudents(prevState => [...prevState, newStudent]) //mantém objetos anterriores e adiciona objeto novo a função
 } 

 //executado automaticamente quando a interface é renderizado
 useEffect(() => {
  // corpo do useEffect (ações a serem executadas)
  console.log('useEffect foi chamado')

  async function fetchData() {
    const response = await fetch('https://api.github.com/users/luis22lf')
    const data = await response.json()
    
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
  }
  fetchData()
  
/*  fetch('https://api.github.com/users/luis22lf')
  .then(response => response.json())
  .then(data => {
    setUser({
      name: data.name,
      avatar: data.avatar_url
    })
  })*/

  },
    /*estados que useEffect depende (quando vazio executa uma única vez. Quando 
    preenchido, executa sempre que o estado é atualizado) */  
    [students]);
  
  return (
    <div className='container'>
      <header>
        <h1>Lista de presença {studentName}</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt='Foto de perfil'></img>
        </div>
      </header>
      

      <input 
      type="text" 
      placeholder="Digite o nome..." 
      onChange={e => setStudentName(e.target.value)} //passando pra função set.. entrada digitada
      />

      <button 
        type="button"
        onClick={handleAddStudent}
      >
        Adicionar
        </button>

      <Card name="Julio Balestrin" time="16:20:00" key='0' />
      {
        students.map(student => <Card name={student.name} time={student.time} key={student.time}/>)
        
      }
      
    </div>
  )
}

export default Home