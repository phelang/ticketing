import { CustomError } from './custom-error'

export class NotAuthorizedError extends CustomError {
  statusCode = 401

  constructor() {
    super('User not aurthorised to access this resource.')
    Object.setPrototypeOf(this, NotAuthorizedError.prototype)
  }
  serializeErrors() {
    return [{ message: 'User not aurthorised to access this resource.' }]
  }
}
