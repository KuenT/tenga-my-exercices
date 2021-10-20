import { my_display_alpha } from "./exercice-1.js";

export const reverse = (str) => {
    var res = "";
    let i = 0;

    while (str[i] !== undefined) {
        res = str[i] + res;
        ++i;
    }

    return res;
}

export const my_display_alpha_reverse = () => {
    return reverse(my_display_alpha());
}

console.log(my_display_alpha_reverse());