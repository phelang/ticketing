import { CustomError } from './custom-error'
export class NotFoundError extends CustomError {
  statusCode = 404
  reason = 'URL request does not exist'

  constructor() {
    super('URL request does not exist')
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [{ message: this.reason }]
  }
}
