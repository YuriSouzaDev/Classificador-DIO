function calcularRank(vitorias, derrotas) {
  const calculoVitorias = vitorias - derrotas;
  let rank;
  const texto = `
  O Herói tem de saldo de ${calculoVitorias} está no nível de `;

  if (calculoVitorias < 10) rank = "Ferro";
  else if (calculoVitorias > 10 && calculoVitorias < 20) rank = "Bronze";
  else if (calculoVitorias > 21 && calculoVitorias < 50) rank = "Prata";
  else if (calculoVitorias > 51 && calculoVitorias < 80) rank = "Ouro";
  else if (calculoVitorias > 81 && calculoVitorias < 90) rank = "Diamante";
  else if (calculoVitorias > 91 && calculoVitorias < 100) rank = "Lendário";
  else if (calculoVitorias >= 100) rank = "Imortal";

  return texto + rank;
}

console.log(calcularRank(999, 10));
