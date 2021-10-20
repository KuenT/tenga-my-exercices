export const my_is_posi_neg = (nbr) => {
    if (nbr < 0)
        return 'NEGATIF'
    if (nbr > 0 || isNaN(nbr) || nbr === null || nbr === undefined)
        return 'POSITIF'
    if (nbr == 0)
        return 'NEUTRAL'
}