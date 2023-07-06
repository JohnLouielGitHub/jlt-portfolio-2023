import { useQuery } from 'react-query'
import ClipLoader from 'react-spinners/Cliploader'
import { TodoItem } from '../components/todoItem'
import { CreateTodoForm } from '../components/CreateTodoForm'
import readTodosRequest from '../api/readTodosRequest'

function TodoPage() {

  const { isLoading, data: todos } = useQuery(
    'todos', readTodosRequest)
  return (
    <div>
      <h1>MERN TODO</h1>
      {isLoading ? <ClipLoader size={150} /> : <div>
        {todos.map((todo, key) => <TodoItem key={key} todo={todo} />)}</div>}
      <CreateTodoForm />
    </div>
  )
}

export default TodoPage
