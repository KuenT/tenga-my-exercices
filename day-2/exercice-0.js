export const my_display_forever_42 = (nbr) => {
    if (!nbr)
        return 42;
    if (isNaN(nbr))
        return 42;
    else 
        return nbr;
}