import cleanPhoneNumber from '../components/clearPhoneNumber';

describe('cleanPhoneNumber from Validator class: ', () => {
  const cases = [
    ['8 (927) 000-00-00', '+79270000000'],
    ['+7 960 000 00 00', '+79600000000'],
    ['+86 000 000 0000', '+860000000000'],
  ];

  test.each(cases)('method cleanPhoneNumber should transform number', (test, expected) => {
    expect(cleanPhoneNumber(test)).toBe(expected);
  });
});
