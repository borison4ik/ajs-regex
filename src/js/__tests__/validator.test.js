import Validator from '../components/Validator';

describe('validateUsername from Validator class: ', () => {
  const cases = [
    ['_username'],
    ['username_'],
    ['-username'],
    ['username-'],
    ['username1'],
    ['1username'],
    ['абв'],
    ['user1234'],
  ];

  test.each(cases)('method validateUsername should throw Error', (item) => {
    expect(() => Validator.validateUsername(item)).toThrow(Error);
  });

  test('valid user name', () => {
    expect(Validator.validateUsername('user_123-super-char')).toBeTruthy();
  });
});

describe('cleanPhoneNumber from Validator class: ', () => {
  const cases = [
    ['8 (927) 000-00-00', '+79270000000'],
    ['+7 960 000 00 00', '+79600000000'],
    ['+86 000 000 0000', '+860000000000'],
  ];

  test.each(cases)('method cleanPhoneNumber should transform number', (test, expected) => {
    expect(Validator.cleanPhoneNumber(test)).toBe(expected);
  });
});
