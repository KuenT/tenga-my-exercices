import { my_array_alpha } from "../day-1/exercice-5.js"

export const my_string_is_number = (str) => {
    return /\d/.test(str);
}

console.log(my_string_is_number("hell3rhf"));