export const my_display_comb = () => {
    const top = 100;
    let index = 0;
    let res = [];

    for (let i = 0; i < top; ++i) {
        for (let j = 0; j < top; ++j) {
            res[index++] = `${i} ${j}`;
        }
    }

    return res;
}