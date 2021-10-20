export const my_is_posi_neg = (nbr) => {
    if (nbr < 0)
        return 'NEGATIF'
    if (nbr > 0 || isNaN(nbr) || nbr == null || typeof nbr === undefined)
        return 'POSITIF'
    if (nbr == 0)
        return 'NEUTRAL'
}

console.log(my_is_posi_neg(hel));