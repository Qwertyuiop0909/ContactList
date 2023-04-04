import React, { useContext, useState } from 'react'

const ContactContext = React.createContext()

const ContactHelpersContext = React.createContext()

export default function ContextProvider({ children }) {
  const [contactList, setContactList] = useState({})

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ContactContext.Provider value={{ contactList }}>
      <ContactHelpersContext.Provider value={setContactList}>
        {children}
      </ContactHelpersContext.Provider>
    </ContactContext.Provider>
  )
}

export const useContactContext = () => useContext(ContactContext)
export const useContactHelpersContext = () => useContext(ContactHelpersContext)
