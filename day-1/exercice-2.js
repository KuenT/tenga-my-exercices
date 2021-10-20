import { my_display_alpha } from "./exercice-1.js";

export const my_display_alpha_reverse = () => {
    let rev = my_display_alpha().split('').reverse().join('');
    return rev;
}