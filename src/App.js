import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useLogin } from '@hooks/auth'

import Button, { ButtonVariant } from '@atom/button'
import Input from '@atom/input'

const schema = yup.object({
  email: yup.string().email().required().min(2).max(50),
})

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const { mutate, isLoading } = useLogin()

  const onSubmit = ({ email, password }) => {
    mutate({ userName: email, password })
  }

  return (
    <div className="pt-6 mx-auto max-w-lg">
      <div className="text-3xl font-bold underline mb-3">
        configure your whole app from here
      </div>
      <Button variant={ButtonVariant.Teal}>Normal Teal Btn</Button>
      {/* <br />
      <Button isLoading>Loading</Button>
      <br />
      <Button variant={ButtonVariant.Blue}>Blue variant</Button>
      <br />
      <Button disabled>Disable</Button>
      <br /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          error={errors.email?.message || ''}
          label="Email"
          name="email"
          register={register}
          type="text"
        />
        <Input
          error={errors.password?.message || ''}
          label="Password"
          name="password"
          register={register}
          type="password"
        />
        <Button isLoading={isLoading} type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default App
