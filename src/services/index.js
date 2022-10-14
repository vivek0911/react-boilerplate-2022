export const HttpStatus = {
  /**
   * The request has succeeded. The meaning of the success depends on the HTTP method:
   * - GET: The resource has been fetched and is transmitted in the message body.
   * - HEAD: The entity headers are in the message body.
   * - PUT or POST: The resource describing the result of the action is transmitted in the message body.
   */
  OK: 200,

  /**
   * The request has succeeded and a new resource has been created as a result.
   * This is typically the response sent after POST requests, or some PUT requests.
   */
  Created: 201,

  /**
   * The request has been received but not yet acted upon. It is noncommittal, since there is no way in
   * HTTP to later send an asynchronous response indicating the outcome of the request.
   * It is intended for cases where another process or server handles the request, or for batch processing.
   */
  Accepted: 202,

  /**
   * There is no content to send for this request, but the headers may be useful.
   * The user-agent may update its cached headers for this resource with the new ones.
   */
  NoContent: 204,

  /**
   * The server could not understand the request due to invalid syntax.
   */
  BadRequest: 400,

  /**
   * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
   * That is, the client must authenticate itself to get the requested response.
   */
  Unauthorized: 401,

  /**
   * This response code is reserved for future use. The initial aim for creating this code was using it for
   * digital payment systems, however this status code is used very rarely and no standard convention exists.
   */
  PaymentRequired: 402,

  /**
   * The client does not have access rights to the content; that is, it is unauthorized, so the server is
   * refusing to give the requested resource. Unlike 401, the client's identity is known to the server.
   */
  Forbidden: 403,

  /**
   * The server can not find the requested resource. In the browser, this means the URL is not recognized.
   * In an API, this can also mean that the endpoint is valid but the resource itself does not exist.
   * Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client.
   * This response code is probably the most famous one due to its frequent occurrence on the web.
   */
  NotFound: 404,

  /**
   * The request method is known by the server but has been disabled and cannot be used.
   * For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD,
   * must never be disabled and should not return this error code.
   */
  MethodNotAllowed: 405,

  /**
   * This response is sent when a request conflicts with the current state of the server.
   */
  Conflict: 409,

  /**
   * The client has indicated preconditions in its headers which the server does not meet.
   */
  PreConditionFailed: 412,

  /**
   * Request entity is larger than limits defined by server; the server might close the
   * connection or return an Retry-After header field.
   */
  RequestEntityTooLarge: 413,

  /**
   * Not a part of the HTTP standard, 419 Authentication Timeout denotes that previously valid authentication has
   * expired. It is used as an alternative to 401 Unauthorized in order to differentiate from otherwise authenticated
   * clients being denied access to specific server resources.
   */
  AuthenticationTimeOut: 419,

  /**
   * The HTTP 429 Too Many Requests response status code indicates the user has sent too many requests in a
   * given amount of time ("rate limiting"). A Retry-After header might be included to this response indicating how
   * long to wait before making a new request.
   */
  TooManyRequests: 429,

  /**
   * The server has encountered a situation it doesn't know how to handle.
   */
  InternalServerError: 500,

  /**
   * The request method is not supported by the server and cannot be handled.
   * The only methods that servers are required to support (and therefore that must
   * not return this code) are GET and HEAD.
   */
  NotImplemented: 501,

  /**
   * This error response means that the server, while working as a gateway to get a
   * response needed to handle the request, got an invalid response.
   */
  BadGateway: 502,

  /**
   * The server is not ready to handle the request. Common causes are a server that is down for maintenance
   * or that is overloaded. Note that together with this response, a user-friendly page explaining the problem
   * should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should,
   * if possible, contain the estimated time before the recovery of the service. The webmaster must also take
   * care about the caching-related headers that are sent along with this response, as these temporary
   * condition responses should usually not be cached.
   */
  ServiceUnavailable: 503,
}

export const apiRoutes = {
  login: '/auth/login',
  register: '/register',
}
