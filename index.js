function add(a, b){
  return a+b;
}

function is_odd(number) {
  return number % 2 != 0;
}

module.exports.func = {
    'is_odd':is_odd,
    'add': add

}
