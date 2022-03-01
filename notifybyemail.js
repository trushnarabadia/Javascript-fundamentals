const notifyByEmail = (emailaddress) => {
  return `Email sent to: ${emailaddress}`;
}
console.log(notifyByEmail('cgreene@gmail.com'))

const notifyByText = (phone_number) => {
  return `Text sent to: ${phone_number}`;
}
//console.log(notifyByText('00011112223'))

const notify = (contact, message) => {
  return message(contact);
}

console.log(notify('makers@gmail', notifyByEmail));