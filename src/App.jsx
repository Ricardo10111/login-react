import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createUser } from './api'
import { Toaster, toast } from 'sonner'
import {  useNavigate } from 'react-router-dom'

export default function App() {
  const [user, setUser] = useState({})

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    reset
  } = useForm()

  const onSubmit = (data) => {
    createUser({
      name: data.name,
      profilePicture: data.profilePicture,
      email: data.email,
      password: data.password
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(err.message)
          })
        }
        return response.json()
      })
      .then((json) => {
        console.log('Response json:', json)
        if (json?.data) {
          setUser(json.data)
          toast.success('User created successfully')
          navigate('/login')
        } else {
          toast.error('Failed to create user')
          reset()
        }
      })
      .catch((error) => {
        console.error('Create User Error:', error)
        toast.error('Create User error: ' + error.message)
      })
  }

  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Toaster position='top-right' richColors />
      <h1 className='text-3xl font-bold text-center bg-blue-600 p-4'>
        Create User
      </h1>
      <form
        className='flex flex-col gap-5 items-center justify-center mt-[15rem]'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type='text'
          className='bg-gray-700 text-white border-2 border-gray-600 rounded-lg p-2 w-[26rem]'
          placeholder='Name'
          {...register('name', {
            required: { value: true, message: 'El campo es requerido' },
            minLength: { value: 3, message: 'Minimo 3 caracteres' },
            maxLength: { value: 180, message: 'Maximo 180 caracteres' }
          })}
        />
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

        <input
          type='text'
          className='bg-gray-700 text-white border-2 border-gray-600 rounded-lg p-2 w-[26rem]'
          placeholder='Profile Picture'
          {...register('profilePicture', {
            required: { value: true, message: 'El campo es requerido' },
            minLength: { value: 3, message: 'Minimo 3 caracteres' }
          })}
        />
        {errors.profilePicture && (
          <p className='text-red-500'>{errors.profilePicture.message}</p>
        )}

        <input
          type='email'
          className='bg-gray-700 text-white border-2 border-gray-600 rounded-lg p-2 w-[26rem]'
          placeholder='Email'
          {...register('email', {
            required: { value: true, message: 'El campo es requerido' },
            minLength: { value: 3, message: 'Minimo 3 caracteres' },
            maxLength: { value: 180, message: 'Maximo 180 caracteres' }
          })}
        />
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

        <input
          type='password'
          className='bg-gray-700 text-white border-2 border-gray-600 rounded-lg p-2 w-[26rem]'
          placeholder='Password'
          {...register('password', {
            required: { value: true, message: 'El campo es requerido' },
            minLength: { value: 3, message: 'Minimo 3 caracteres' },
            maxLength: { value: 180, message: 'Maximo 180 caracteres' }
          })}
        />
        {errors.password && (
          <p className='text-red-500'>{errors.password.message}</p>
        )}

        <button
          type='submit'
          className='bg-blue-600 text-white rounded-lg p-2 w-[26rem] hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed'
          disabled={isSubmitted ? !isValid : false}
        >
          Create User
        </button>
      </form>
    </div>
  )
}
