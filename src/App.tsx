import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lists, setLists] = useState(['', ''])
  const [delim, setDelim] = useState('\n')
  const [stripWhitespace, setStripWhitespace] = useState(true)
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState(new Set())

  const inputSets = useMemo(() =>
    lists.map(list =>
      new Set(list
        .split(delim)
        .map(el => stripWhitespace ? el.trim() : el))
    )
  , [lists, delim, stripWhitespace])

  const displayResult = useMemo(() =>
    Array.from(result).join(delim)
  , [result, delim])
  

  const updateList = (index: number, value: string) => {
    const newLists = [...lists]
    newLists[index] = value
    setLists(newLists)
  }

  const removeSet = (index: number) => {
    const newLists = [...lists]
    newLists.splice(index, 1)
    setLists(newLists)
  }

  const addSet = () => {
    setLists(lists.concat(['']))
  }

  return (
    <>
      <input
        name="expression"
        placeholder="Expression"
        value={expression}
        onChange={(ev) => setExpression(ev.target.value)}
      />
      {lists.map((list, idx) => 
        <div 
          className="list"
          key={idx}
        >
          <textarea
            value={list}
            onChange={(ev) => updateList(idx, ev.target.value)}
          />
          <button
            onClick={() => removeSet(idx)}
          >
            Remove set
          </button>
        </div>
      )}
      <button onClick={addSet}>Add set</button>
      <output>
        {displayResult}
      </output>
    </>
  )
}

export default App
