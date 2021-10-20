export const my_sum = (a, b) => {
    if (!a)
        return 0;
    if (!b)
        return 0;
    if (isNaN(a) || isNaN(b))
        return 0;
    else {
        return a + b;
    }
}