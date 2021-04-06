
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  const singleMatrix = arrays.reduce((matrix, eachMatrix) => {
    return matrix.concat(eachMatrix);
  }, []);
  return singleMatrix;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);