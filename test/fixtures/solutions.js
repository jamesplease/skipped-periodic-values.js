global.fixtures = global.fixtures || {};

// Value of 4, period of 5, start at 0
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 ...
// 0 1 2 3 _ 4 5 6 7 _ 8  9  10 11 __ 12 13 ...
global.fixtures.one = [
  0, 0, 0, 0,
  1, 1, 1, 1,
  2, 2, 2, 2,
  3, 3, 3, 3,
  4, 4, 4, 4
];

// Value of 4, period of 4, start at 0
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 ...
// _ 1 2 3 _ 4 5 6 _ 7 8  9  10 __ 11 12 13 ...
global.fixtures.two = [
  0, 0, 0, 0,
  1, 1, 1,
  2, 2, 2,
  3, 3, 3,
  4, 4, 4
];
