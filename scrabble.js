const scoreChart = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  l: 1,
  n: 1,
  r: 1,
  s: 1,
  t: 1,
  d: 2,
  g: 2,
  b: 3,
  c: 3,
  m: 3,
  p: 3,
  f: 4,
  h: 4,
  v: 4,
  w: 4,
  y: 4,
  k: 5,
  j: 8,
  x: 8,
  q: 10,
  z: 10,
  _: 0,
};

//step1 check how much tiles in hands => tile frenquency
//step2 separate the word and loop the letter individually
//step3 get one letter match the tile then remove the tile
//step4 if there's no match tile then check if there's any blank tile
//step5 if there's no match tile nor blank tile, then score 0
const scoreWords = (word, tiles) => {
  let _tiles = {};
  let point = 0;
  for (let letter of tiles) {
    if(!_tiles[letter]) _tiles[letter]=0;
    _tiles[letter]++;
  }
  for(let letter of word) {
    if(_tiles[letter] > 0) {
      _tiles[letter]--;
      point+= scoreChart[letter];
    } else if(_tiles["_"] > 0){
      _tiles["_"]--;
    } else {
      return 0;
    }
  }
  return point;
};

module.exports = scoreWords;
