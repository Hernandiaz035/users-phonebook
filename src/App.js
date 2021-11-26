import { useState } from 'react'
import Card from './components/Card.js'
import Container from './components/Container'
import UserForm from './components/UserForm'

const App = () => {
  const [users, setUsers] = useState([])

  const submit = (user) => {
    const tmpUsers = [...users, { ...user }]

    const sortedUsers = tmpUsers.sort((a, b) => {
      const aName = a.name.toLowerCase()
      const bName = b.name.toLowerCase()

      return aName < bName ? -1 : 1
    })
    setUsers(sortedUsers)
  }

  return(
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <UserForm submit={submit} />
        </div>
      </Card>
      <Card>
        <ul>
          {users.map((u) =>
            <li key={u.email}>
              {`Name: ${u.name}, Lastname: ${u.lastname}, Email: ${u.email}`}
            </li>
          )}
        </ul>
      </Card>
    </Container>
  )
}

export default App
