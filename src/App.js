import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card.js'
import Container from './components/Container'
import Button from './components/Button'

const initialForm = { name: "", lastname: "", email: "" }

const App = () => {
  const [form, handleChange] = useForm(initialForm);

  console.log(form)

  return(
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              label="Name"
            />
            <Input
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              label="Last name"
            />
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              label="Email"
            />
            <Button>
              Submit
            </Button>
          </form>
        </div>
      </Card>
    </Container>
  )
}

export default App
