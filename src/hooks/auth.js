import { useQuery, useMutation } from '@tanstack/react-query'

import { login, todos } from '@services/auth'

import cacheKeys from '@util/cache-keys'

export const useGetTodos = () => useQuery([cacheKeys.todos], todos)
export const useLogin = () => useMutation(login)
