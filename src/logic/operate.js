import Big from 'big.js'; // eslint-disable-line

const operate = (num1, num2, operation) => {
  const n = Big(num1);
  const n2 = Big(num2);
  let evaluation;

  switch (operation) {
    case '+':
      evaluation = n.plus(n2);
      break;
    case '-':
      evaluation = n.minus(n2);
      break;
    case 'x':
      evaluation = n.times(n2);
      break;
    case '÷':
      if (n2 === '0') {
        evaluation = 'Invalid operation: division by 0';
      } else {
        evaluation = n.div(n2);
      }
      break;
    default:
      evaluation = n.mod(n2);
  }

  return evaluation.toString();
};

export default operate;
