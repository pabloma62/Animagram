import { gql, useMutation } from '@apollo/client'
const LOGIN_MUTATION = gql`
  mutation login($input: UserCredentials!) {
    login (input: $input)
}
`
export const useLoginMutation = () => {
  const [loginMutation, { error, loading }] = useMutation(LOGIN_MUTATION)
  return { loginMutation, error, loading }
}
