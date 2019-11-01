/**
 * Custom errors-class ValidationError
 */
export class ValidationError extends Error {
  /**
   * Create errors ValidationError
   * @param {String} message - errors message
   */
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}
