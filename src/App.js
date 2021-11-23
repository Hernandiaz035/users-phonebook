import useForm from './hooks/useForm'
import Input from './components/Input'
import Card from './components/Card.js'

const initialForm = { name: "", lastname: "", email: "" }

const App = () => {
  const [form, handleChange] = useForm(initialForm);

  console.log(form)

  return(
    <Card>
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
      </form>
    </Card>
  )
}

export default App
