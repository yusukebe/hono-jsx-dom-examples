import { memo } from 'hono/jsx'
import { Todo } from './utils'

const List = memo(function List({ items }: { items: Todo[] }) {
  console.log('[ARTIFICIALLY SLOW] Rendering <List /> with ' + items.length + ' items')
  let startTime = performance.now()
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.completed ? <s>{item.text}</s> : item.text}</li>
      ))}
    </ul>
  )
})

export default List
