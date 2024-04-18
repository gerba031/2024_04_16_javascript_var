var x = 'lorem ispum',
  y = 2345,
  z = '2345',
  q = false,
  w = true;

var trueFalse = q;

console.log('trueFalse=' + trueFalse);

if (trueFalse !== true) {
  console.log('1. q = ' + trueFalse);
}

if (trueFalse === true) {
  console.log('2. q = ' + trueFalse);
}

if (q && w) {
  console.log('q i w su true');
} else {
  console.log('jedan od q ili w nije true');
}

console.log('ostatak pri cjelobrojom dijeljeju od 9/2 = ' + (9 % 2));
console.log('ostatak pri cjelobrojom dijeljeju od 5/2 = ' + (5 % 2));

if (9 % 2 === 0 && 5 % 2 === 0) {
  console.log('ostatak pri cjelobrojom dijeljenju je 0');
} else {
  console.log('ostatak pri cjelobrojom dijeljenju NIJE 0');
}

console.log('ostatak pri cjelobrojom dijeljeju od 9/3 = ' + (9 % 3));
console.log('ostatak pri cjelobrojom dijeljeju od 5/2 = ' + (5 % 2));

if (9 % 3 === 0 && 5 % 2 === 0) {
  console.log('ostatak pri cjelobrojom dijeljenju je 0');
} else {
  console.log('ostatak pri cjelobrojom dijeljenju NIJE 0');
}

if (9 % 3 === 0 || 5 % 2 === 0) {
    console.log('ostatak pri cjelobrojom dijeljenju je 0');
  } else {
    console.log('ostatak pri cjelobrojom dijeljenju NIJE 0');
  }