import { useState } from 'react'
import Todos from './components/Todos'
import User from './components/User'
import Error from './components/Error'
function App() {
  const [users, setUsers] = useState([])
  const [todo, setTodo] = useState([])
  const [display, setDisplay] = useState(false)
  const [errorFlag, setErrorFlag] = useState(false)

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Error ')
        }
      })
      .then((json) => setTodo(json))
      .catch((error) => {
        setErrorFlag(true)
      })
    setDisplay(true)
  }

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Error ')
        }
      })
      .then((json) => setUsers(json))
      .catch((error) => {
        setErrorFlag(true)
      })
    setDisplay(false)
  }
  if (errorFlag) {
    return <Error />
  }

  return (
    <div className='container'>
      <div className=' bg-cyan-400'>
        <div className='flex flex-row justify-center mx-auto p-4 space-x-6'>
          <button
            className='p-2 border-2 rounded-lg max-w-lg'
            onClick={fetchUsers}
          >
            Users
          </button>
          <button
            className='p-2 border-2 rounded-lg max-w-lg'
            onClick={fetchTodos}
          >
            Todos
          </button>
        </div>
      </div>
      {!display ? (
        <div className='container bg-white grid grid-cols-4 overflow-hidden  '>
          {users.map((user, index) => {
            return <User key={index} {...user} />
          })}
        </div>
      ) : (
        <div className=' container bg-white grid grid-cols-6 overflow-hidden '>
          {todo.map((todo, index) => {
            return <Todos key={index} {...todo} />
          })}
        </div>
      )}
    </div>
  )
}

export default App
