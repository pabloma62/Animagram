import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'
export const NotRegisteredUser = () => {
  const { registerMutation, error, loading } = useRegisterMutation()
  const { loginMutation } = useLoginMutation()

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            registerMutation({ variables })
              .then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
          }
          const loginAction = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            loginMutation({ variables })
              .then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
          }

          const errorMsg = error && 'El usuario ya existe o hay algún problema'
          return <>
            <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
            <UserForm disabled={loading} error={errorMsg} onSubmit={loginAction} title='Iniciar Sesion' />
                  </>
        }

      }
    </Context.Consumer>
  // <h1>NotRegisteredUser</h1>
  )
}
