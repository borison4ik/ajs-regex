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
