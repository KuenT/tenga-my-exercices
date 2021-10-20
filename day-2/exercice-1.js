export const my_alpha_reverse = (str) => {
    export const reverse = (str) => {
        var res = "";
        let i = 0;
    
        while (str[i] !== undefined) {
            res = str[i] + res;
            ++i;
        }
    
        return res;
    }
}