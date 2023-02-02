//Telephone Number Validator
function telephoneCheck(str) {
  var t = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return t.test(str);
}
//Cash Register
