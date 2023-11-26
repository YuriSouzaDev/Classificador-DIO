function classificador(nome, exp) {
  const text = `O Herói de nome ${nome} está no nível de`;

  switch (true) {
    case exp < 1000:
      return text + " Ferro";
    case exp > 1000 && exp < 2000:
      return text + " Bronze";
    case exp > 2000 && exp < 5000:
      return text + " Prata";
    case exp > 5000 && exp < 7000:
      return text + " Ouro";
    case exp > 7000 && exp < 8000:
      return text + " Platina";
    case exp > 8000 && exp < 9000:
      return text + " Ascendente";
    case exp > 9000 && exp < 10000:
      return text + " Imortal";
    default:
      return text + " Radiante";
  }
}

console.log(classificador("Yuri", 2500));
