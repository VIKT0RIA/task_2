module.exports = function obfuscatorCss(arrayCss) {
  function gen(minLength, maxLength, symbols) {
    /*
      minLength - минимальное число символов в элементе
      maxLength - максимальное число символов
      symbols - 'алфавит', символы из которых состоят элементы
    */
    var result = new Array();
    for (var length = minLength; length <= maxLength; length++) {
      for (var symbNumber = 0; symbNumber < symbols.length; symbNumber++) {
        var thisElement = symbols.substring(symbNumber, symbNumber + 1);
        if (length < 2) {
          result[result.length] = thisElement;
        } else {
          var apendix = gen(length - 1, length - 1, symbols);
          for (apendixSymbNumber = 0; apendixSymbNumber < apendix.length; apendixSymbNumber++)
            result[result.length] = thisElement + '' + apendix[apendixSymbNumber];
        }
      }
    }
    return (result);
  };
  var minCss = gen(1, 2, 'abcdefghijklmnopqrstuvwxyz');

  function mixToObject(arrA, arrB) {
    var rv = {};
    for (var i = 0; i < arrA.length; ++i)
      rv[arrA[i]] = arrB[i];
    return rv;
  };
  return (mixToObject(arrayCss, minCss));
};
