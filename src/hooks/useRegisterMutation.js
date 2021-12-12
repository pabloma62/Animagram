import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
    mutation signup($input: UserCredentials!){
        signup(input: $input)
    }
`
export const useRegisterMutation = () => {
  const [registerMutation, { error, loading }] = useMutation(REGISTER)

  return { registerMutation, error, loading }
}
