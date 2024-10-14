const currency ={
    USD: 1,
    EUR: 0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280
};
document.getElementById('converter-form').addEventListener('submit', function (e) {
    e.preventDefault();

let FromCurrency = document.getElementById('from').value; 
let ToCurrency = document.getElementById('To').value ;
let Amount = document.getElementById('Amount').value ;




let fromAmount = currency[FromCurrency]
let toAmount = currency[ToCurrency]
let baseAmount = Amount / fromAmount
let convertedAmount =  baseAmount * toAmount

document.getElementById('result').innerHTML = `Converted Amount: ${Math.round(convertedAmount)}`;
})

// bs is t small or capital ka masla tha
// to ye t kaha se chk kia k in capita/l letter
// ok
