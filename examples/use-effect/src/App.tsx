import { useState, useEffect } from 'hono/jsx'
import { fetchBio } from './api'

interface ChangeEvent<T = Element> {
  target: EventTarget & T
}

export default function Page() {
  const [person, setPerson] = useState('Alice')
  const [bio, setBio] = useState('')
  useEffect(() => {
    let ignore = false
    setBio('')
    fetchBio(person).then((result) => {
      if (!ignore) {
        setBio(result)
      }
    })
    return () => {
      ignore = true
    }
  }, [person])

  return (
    <>
      <select
        value={person}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          setPerson(e.target.value)
        }}
      >
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio === '' ? 'Loading...' : bio}</i>
      </p>
    </>
  )
}
