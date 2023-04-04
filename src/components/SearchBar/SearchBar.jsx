import { useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CONTACTS_FROM_REQ } from '../ContactList/ContactList'

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [input, setInput] = useState(() => searchParams.get('q') ?? '')
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  useEffect(() => {
    if (!input) {
      setSearchParams({})
      queryClient.invalidateQueries({ queryKey: CONTACTS_FROM_REQ })
      return
    }
    console.log(input)
    queryClient.invalidateQueries({ queryKey: CONTACTS_FROM_REQ }).then(
      () => {
        queryClient.setQueryData(CONTACTS_FROM_REQ, (old) => old
          .filter((elem) => (new RegExp(input, 'g')).test(`${elem.firstName} ${elem.lastName}`)))
        setSearchParams({ q: input })
      },
    )
  }, [input])

  const changeHandler = (e) => {
    setInput(e.target.value)
  }

  return (
    <form>
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
          onChange={(e) => changeHandler(e)}
          onFocus={() => navigate('/')}
        />
      </div>
    </form>
  )
}

export default SearchBar
