const pressedKeys = [];
const secretCode =
  'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';

window.addEventListener('keydown', (e) => {
  if (
    e.key === 'ArrowUp' ||
    e.key === 'ArrowDown' ||
    e.key === 'ArrowLeft' ||
    e.key === 'ArrowRight' ||
    e.key === 'b' ||
    e.key === 'a'
  ) {
    pressedKeys.push(e.key);
  }

  const joinedWords = pressedKeys.join('');

  if (joinedWords.length > secretCode.length) {
    pressedKeys.length = 0;
  }

  if (joinedWords === secretCode) {
    alert('Up, Up, Down, Down, Left, Right, Left, Right, B, A, Start!');
    pressedKeys.length = 0;
  }
});
