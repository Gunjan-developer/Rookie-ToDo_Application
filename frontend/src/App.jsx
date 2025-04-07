import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos , setTodos]= useState([]);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null);

  

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3001/todos");
        if(!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log("the respective data: ",data);
        setTodos(data["todos"]);
        setLoading(false);
      }
      catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchTodos();
  }, []);

  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  }

  if (loading) {
    return <div>Loading...</div>
  }
  
  

  return (
    <>
      <p>Hello There Full Stack Developer</p>
      <CreateTodo onAddTodo={addTodo} />
      <Todos todos={todos} />
    </>
  )
}

export default App
