// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

const inversoo = (valor) => {
  if (valor == true) {
    return false;
  } else if (valor == false) {
    return true;
  } else if (valor = String) {
    return `booleano ou números esperados, mas o parâmetro é do tipo string`;
  } else if (valor == "number") {
    return -valor;
  }
};

console.log(inversoo(8));

function inverso(valor) {
  const tipo = typeof valor;
  if (tipo == "boolean") {
    return !valor;
  } else if (tipo == "number") {
    return -valor;
  } else {
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`;
  }
}

console.log(inverso(6));
