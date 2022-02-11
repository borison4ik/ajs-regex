export default function cleanPhoneNumber(phone) {
  const regclear = /[\s\-()]/g;
  const cleanPhone = `${phone}`.replace(regclear, '').replace(/^8|\+7/g, '+7');
  return cleanPhone;
}
