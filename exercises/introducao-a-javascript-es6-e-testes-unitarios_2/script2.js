const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
 
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const createElement = (object, key, value) => object[key] = value;
createElement(lesson2, 'turno', 'manhã' );

const listOfKeyObject = (object) => `${Object.keys(object)}`;

const objectSizeCounter = (object) => `O objeto possui o tamanho de ${Object.keys(object).length} elementos.`;

const listOfValueObject = (object) => `${Object.values(object)}`;

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
