export const reverseString = (str) => {
    var res = "";
    let i = 0;

    while (str[i] !== undefined) {
        res = str[i] + res;
        ++i;
    }

    return res;
}

export const my_alpha_reverse = (str) => {
    return reverseString(str);
}

console.log(my_alpha_reverse("hello"));