export class ErrorUtility {
    static extractErrorMessage(error: any): string {
      if (error instanceof Error) {
        return error.message;
      } else if (error && error.status !== undefined) {
        return error.error.message;
      } else {
        return 'Something went wrong';
      }
    }
  }