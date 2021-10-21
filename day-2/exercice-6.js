import { my_display_alpha } from "../day-1/exercice-1.js";
import { my_array_alpha } from "../day-1/exercice-5.js";
import { my_length_array } from '../day-1/exercice-6.js';

/*export const my_display_unicode = (arr) => {
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseLetters = my_display_alpha();
  var numericLetters = "0123456789";
  var result = "";
  var char = []
  while (!!char) {
    if (char >= 97 && char <= 122) {
      result += lowerCaseLetters[char - 97];
    }
    else if (char >= 65 && char <= 90) {
      result += upperCaseLetters[char - 65];
    }
    else if (char >= 48 && char <= 57) {
      result += numericLetters[char - 48];
    }
    else if (char == 32) {
      result += " ";
    }
    arr_cpt++;

    char = [];
  }
  return result;
}*/

export const my_display_unicode = (arr) => {
    const alpha = {
        97: 'a',
        98: 'b',
        99: 'c',
        100: 'd',
        72: 'H',
        101: 'e',
        108: 'l',
        111: 'o',
        122: 'z',
        32: ' '
    };
    let str = '';

    for (let i = 0; i <=  my_length_array(arr); i += 1) {
        if (!!alpha[arr[i]]) {
            str += alpha[arr[i]];
        }
    }

    return str;
}

console.log(my_display_unicode([72, 101, 108, 108, 111, 32, 72, 101, 108, 108, 111, 123]));