import axiosClient from '@services/axios-instance'

import { apiRoutes } from '@services'

export const login = (payload) => axiosClient.post(apiRoutes.login, payload)

export const todos = () => axiosClient.get(apiRoutes.getPosts)
