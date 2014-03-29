function add(a, b){
  return a+b;
}

function is_odd(number) {
  return number % 2 != 0;
}

exports.add = add;
exports.id_odd = is_odd;
