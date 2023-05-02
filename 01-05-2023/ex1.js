// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar números de strings.

const maiorOuIgual = (one, two) => {
  if (typeof one !== typeof two) {
    return false;
  } else if (one >= two) {
    return true;
  } else {
    return `O primeiro não é maior que o segundo`;
  }
};

console.log(maiorOuIgual(0, 1));
