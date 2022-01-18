import { HttpException } from './http.exception'

export class UnauthorizedRequestException extends HttpException {
  constructor(message: string) {
    super(401, message, 'Unauthorized')
  }
}
