import {evaluate as e} from 'mathjs';

export const round = (value: any, decimals = 2): number => {
  const multiplier = 10 ** decimals;
  const adjustment = 1 / 10 ** (decimals + 2);
  let newValue = value + adjustment;
  newValue = Math.round(newValue * multiplier);
  return newValue / multiplier;
};

export const evaluate = (expr: any): number => {
  let expression = expr;
  expression = expression.split(',').join('.');
  expression = expression.split('÷').join('/');
  expression = expression.split('×').join('*');
  expression = expression.replace(
    /([+-])(\d+.?\d*)%(?!\d)/g,
    '*(1$1($2*0.01))',
  );
  expression = expression.replace(/\/(\d+.?\d*)%(?!\d)/g, '/($1*0.01)');
  expression = expression.replace(/(%)$/g, '*0.01');
  expression = expression.split('%').join('*0.01*');
  return e(expression);
};

export const evaluateAndRound = (expr: any, decimals = 2): number =>
  round(evaluate(expr), decimals);

export default {
  round,
  evaluate,
  evaluateAndRound,
};
