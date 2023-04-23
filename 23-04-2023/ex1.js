// Função com 2 parâmetos

const calcularSalario = (horasTrab, valorHora) => {
  let salarioBruto = horasTrab * valorHora;
  let salarioLiquido = salarioBruto - salarioBruto * 0.3;
  console.log(`Salário líquido é igual a R$ ${salarioLiquido}`);
};
calcularSalario(180, 60);