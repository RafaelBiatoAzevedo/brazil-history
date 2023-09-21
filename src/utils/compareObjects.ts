import { isEqual } from "lodash";
export const compareObjects = (objectA: {}, objectB: {}) => {
  let objectAKeys = Object.keys(objectA);
  let areDiff = objectAKeys.filter(
    (key) => !isEqual(objectA[key], objectB[key])
  );

  return areDiff;
};
