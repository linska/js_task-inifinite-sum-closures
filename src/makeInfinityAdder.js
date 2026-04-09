'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let accumulator = 0;
  let calledClear = false;

  const infinityAdder = (value) => {
    if (value === undefined) {
      if (calledClear) {
        accumulator = 0;
      }

      calledClear = true;

      return accumulator;
    }
    accumulator += value;
    calledClear = false;

    return infinityAdder;
  };

  return infinityAdder;
}

module.exports = makeInfinityAdder;
