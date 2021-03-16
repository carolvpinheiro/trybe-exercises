/*
const statesOfBrazil = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goías',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraíma',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
};
//Referência: https://gist.github.com/kavalcante/16106796c430c1711a71c5ba1213cee5#gistcomment-3432282

function createStateList(states) {
  for (let key in states) {
    let option = document.createElement('option');
    document.querySelector('#state').appendChild(option);
    option.value = key;
    option.innerHTML = states[key];
  }
}
createStateList(statesOfBrazil);
*/
let startDate = document.createElement('input');
document.querySelector('#start-date').appendChild(startDate);
startDate.type = "text";
startDate.name = "start-date";
startDate.id = "start-date";
startDate.maxLength = "10";
startDate.placeholder = "Digite a data no formato dd/mm/aaaa";
startDate.required = true;

let button = document.querySelector('#submit');

button.addEventListener('click', () => {
  console.log(startDate.innerText);
});

function dateVerification(date) {
  let dateArray = date.split("/");
  console.log(dateArray)
  let dateDay = dateArray[0];
  let dateMonth = dateArray[1];
  let dateYear = dateArray[2];

  if (dateArray === null) {
    return false;
  }

  if (dateDay > 0 && dateDay <= 31) {
    return true;
  } else if (dateMonth > 0 && dateMonth <= 12) {
    return true;
  } else if (dateYear > 0) {
    return true;
  } else {
    return false;
  }
}
dateVerification();

console.log(dateVerification("1203"))

if (dateVerification(data) === true) {
  //startDate.innerHTML = date;
  console.log(date);
} else {
  //startDate.innerHTML = 'Data inválida';
  console.log('Data inválida');
}

//Referência: https://pt.stackoverflow.com/questions/91379/como-validar-data-com-angularjs-ou-jquery