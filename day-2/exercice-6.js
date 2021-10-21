import { my_display_alpha } from "../day-1/exercice-1.js";

export const my_display_unicode = (arr) => {
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseLetters = my_display_alpha();
  var numericLetters = "0123456789";
  var arr_cpt = 0;
  var result = "";
  var char = arr[arr_cpt]
  while (char != undefined) {
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
    char = arr[arr_cpt];
  }
  return result;
}