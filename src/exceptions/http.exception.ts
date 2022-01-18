export class HttpException extends Error {
  readonly status: number
  readonly message: string
  readonly error: string

  constructor(status: number, message: string, error: string) {
    super()
    this.status = status
    this.message = message
    this.error = error
  }
}
