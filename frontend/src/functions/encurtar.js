function encurtar(string = '', limite) {
  return string.split('').length > limite
    ? string.split('').splice(0, limite).join('') + '...'
    : string;
}

export default encurtar;