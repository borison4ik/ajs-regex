export default class Validator {
  static validateUsername(username) {
    const regString = /^[^\d-_][\w-]+[^\d-_]$/;
    const regInt = /\d{4,}/;
    if (!regString.test(username) || regInt.test(username)) {
      throw new Error('Invalid username');
    }
    return true;
  }
}
