const CONTACTS_URL = 'http://localhost:3050/api/v1/contacts'

const Api = {
  getAllContacts: () => fetch(`${CONTACTS_URL}`).then((res) => {
    if (res.status !== 200) {
      throw new Error('Не удалось загрузить пользователей')
    }
    return res.json()
  }),

  getContactById: (id, signal) => fetch(`${CONTACTS_URL}/${id}/`, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    signal,
  }).then((res) => {
    if (res.status !== 200) {
      throw new Error('Не удалось загрузить пользователя')
    }
    return res.json()
  }),

  addContact: (resData) => fetch(CONTACTS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resData),
  }).then((res) => {
    if (res.status !== 201) {
      throw new Error('Не удалось добавить пользователя')
    }
    return res.json()
  }),

  deleteContact: (id) => fetch(`${CONTACTS_URL}/${id}`, {
    method: 'DELETE',
  }).then((res) => {
    if (res.status !== 200) {
      throw new Error('Не удалось удалить пользователя')
    }
  }),

  editContact: (id, resData) => fetch(`${CONTACTS_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(resData),
  }).then((res) => {
    if (res.status !== 200) {
      throw new Error('Не удалось изменить данные пользователя')
    }
    return res.json()
  }),

  like: (id) => fetch(`${CONTACTS_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }).then((res) => {
    if (res.status !== 200) {
      throw new Error('Не удалось поставить лайк')
    }
  }),
}
export default Api
