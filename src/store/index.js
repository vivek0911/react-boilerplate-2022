import { configureStore } from '@reduxjs/toolkit'

import errorHandler from '@store/middleware/error-handler'
import auth from '@store/slice/auth'

const store = configureStore({
  reducer: {
    auth: auth.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }, errorHandler),
  ],
})

export default store
