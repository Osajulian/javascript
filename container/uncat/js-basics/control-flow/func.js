
let output = document.getElementById('output');


function myName(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;
  return fullName;
}
output.innerHTML = myName('Osa', 'Julian');