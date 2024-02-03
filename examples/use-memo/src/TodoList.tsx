import { useMemo } from 'hono/jsx'
import List from './List.js'
import { Todo, filterTodos } from './utils.js'

export default function TodoList({ todos, theme, tab }: { todos: Todo[]; theme: string; tab: string }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab])
  return (
    <div class={theme}>
      <p>
        <b>
          Note: <code>List</code> is artificially slowed down!
        </b>
      </p>
      <List items={visibleTodos} />
    </div>
  )
}
