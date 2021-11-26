import useForm from '../hooks/useForm'
import Input from './Input'
import Button from './Button'

const initialForm = { name: "", lastname: "", email: "" }

const UserForm = ({ submit }) => {
    const [form, handleChange, resetForm] = useForm(initialForm);

    const handleSubmit = (e) => {
        e.preventDefault()

        submit(form)

        resetForm()
      }

    return (
        <form onSubmit={handleSubmit}>
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
    )
}

export default UserForm
