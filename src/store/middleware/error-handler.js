import { includes } from 'lodash'

/**
 * A Redux middleware that interprets actions with type `setError` specified.
 * Since, we are using aws-amplify API client for http requests.
 * API status code response > 299 are thrown as an exception which will be
 * intercepted by this middleware if errors are dispatched with `setError`
 * action.
 *
 * Only exception is for Auth requests which are not being transmitted
 * using axios and are handled separately.
 */
export const UserFriendlyError = { message: 'Something went wrong' }
const errorHandler = () => (next) => (action) => {
  if (!(includes(action.type, 'setError') && action.payload)) {
    // ignoring all other actions
    return next(action)
  }

  const error = action.payload

  if (error.isAxiosError) {
    return next({
      ...action,
      payload:
        error.response?.data?.message ||
        error.message ||
        UserFriendlyError.message,
    })
  } else if (error.message) {
    // Cognito Auth errors to be handled here,
    return next(action)
  }

  // Override error message if there's not enough information in
  // error payload.
  return next({ ...action, payload: UserFriendlyError })
}

export default errorHandler
