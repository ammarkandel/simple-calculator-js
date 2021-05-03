import { v1 as uuidv1 } from 'uuid';
import Button from './Button';

const ButtonPanel = () => {
  const panels = [
    'AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '0', '.', '=',
  ];

  const printBtns = (btn) => (<Button button={btn} key={uuidv1()}>{btn}</Button>);

  return (
    <>
      <div>
        {panels.slice(0, 4).map(printBtns)}
      </div>
      <div>
        {panels.slice(4, 8).map(printBtns)}
      </div>
      <div>
        {panels.slice(8, 12).map(printBtns)}
      </div>
      <div>
        {panels.slice(12, 15).map(printBtns)}
      </div>
    </>
  );
};

export default ButtonPanel;
