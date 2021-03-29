const pessoaContratada = (nome) => {
    let nomeEmail = nome.replace(' ', '-').toLowerCase();
    return { Nome: nome, Email: `${nomeEmail}@trybe.com` };
}

const newEmployees = () => {
  const employees = {
    id1: pessoaContratada('Pedro Guerra'),
    id2: pessoaContratada('Luiza Drumond'),
    id3: pessoaContratada('Carla Paiva')
  }
  return employees;
};
console.log(newEmployees());