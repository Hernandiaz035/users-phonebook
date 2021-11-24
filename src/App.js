import { useState } from 'react'
import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card.js'
import Container from './components/Container'
import Button from './components/Button'

const initialForm = { name: "", lastname: "", email: "" }

const App = () => {
  const [users, setUsers] = useState([])
  const [form, handleChange, resetForm] = useForm(initialForm);

  const submit = (e) => {
    e.preventDefault()

    const tmpUsers = [...users, { ...form }]
    const sortedUsers = tmpUsers.sort((a, b) => {
      const aName = a.name.toLowerCase()
      const bName = b.name.toLowerCase()

      return aName < bName ? -1 : 1
    })
    setUsers(sortedUsers)
    resetForm()
  }

  return(
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form onSubmit={submit}>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              label="Name"
              placeholder="Name"
              />
            <Input
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              label="Last name"
              placeholder="Last name"
              />
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              label="Email"
              placeholder="Email"
            />
            <Button>
              Submit
            </Button>
          </form>
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
