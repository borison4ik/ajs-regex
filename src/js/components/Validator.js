export default class Validator {
  static validateUsername(username) {
    const regString = /^[^\d-_][\w-]+[^\d-_]$/;
    const regInt = /\d{4,}/;
    if (!regString.test(username) || regInt.test(username)) {
      throw new Error('Invalid username');
    }
    return true;
  }

  static cleanPhoneNumber(phone) {
    const regclear = /[\s\-()]/g;
    const cleanPhone = `${phone}`.replace(regclear, '').replace(/^8|\+7/g, '+7');
    return cleanPhone;
  }
}
