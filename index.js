import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_xvKL3BMuDAoYocSYbLbSuiPqs8crHD6XY88Gfgl1'); 


export async function convertCurreny(fromcurrency,toCurrency,units){
   const res = await freecurrencyapi.latest({
        base_currency: fromcurrency,
        currencies: toCurrency
    })

    const multilpier = res.data[toCurrency] ;
    return multilpier * units ;
}



