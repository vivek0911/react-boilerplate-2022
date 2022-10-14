import { useQuery } from '@tanstack/react-query'

import axiosClient from '@services/axios-instance'
import { apiRoutes } from '@services/index'

import cacheKeys from '@util/cache-keys'

export const useGetTodos = () =>
  useQuery([cacheKeys.todos], () => axiosClient.get(apiRoutes.getPosts))
