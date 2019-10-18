/**
 * Custom error-class ValidationError
 */
export class ValidationError extends Error {
  /**
   * Create error ValidationError
   * @param {String} message - error message
   */
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}
