import { useState } from 'react'
import { useTodoHelpersContext } from '../ContextProvider/ContextProvider'

function Form() {
  const [input, setInput] = useState('')
  const { addNewTodo } = useTodoHelpersContext()
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      console.log(e)
      addNewTodo(e.target['0'].value)
    }}
    >
      <div className="input-group mt-3 mb-2">
        <span className="input-group-text" id="inputGroup-sizing-default">
          <i className="fa-solid fa-magnifying-glass" />
        </span>
        <input
          value={input}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </form>
  )
}

export default Form
