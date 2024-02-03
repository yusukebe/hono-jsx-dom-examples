import { createContext, useContext, type Child } from 'hono/jsx'

const ThemeContext = createContext('')

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  )
}

type PanelOptions = {
  title: string
}

function Panel({ title, children }: PanelOptions & { children: Child }) {
  const theme = useContext(ThemeContext)
  const className = 'panel-' + theme
  return (
    <section class={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }: { children: Child }) {
  const theme = useContext(ThemeContext)
  const className = 'button-' + theme
  return <button class={className}>{children}</button>
}
