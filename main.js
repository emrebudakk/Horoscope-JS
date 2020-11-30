const month = 12; //mart ayi
const day = 20; //ayin 12. gunu

if ((month == 2 && day > 18) || (month == 3 && day < 21)) {
    console.log("Balik");
} else if ((month == 3 && day > 20) || (month == 4 && day < 21)) {
    console.log("Koc");
} else if ((month == 4 && day > 20) || (month == 5 && day < 22)) {
    console.log("Boga");
} else if ((month == 5 && day > 21) || (month == 6 && day < 22)) {
    console.log("Ikizler");
} else if ((month == 6 && day > 21) || (month == 7 && day < 24)) {
    console.log("Yengec");
} else if ((month == 7 && day > 23) || (month == 8 && day < 24)) {
    console.log("Aslam");
} else if ((month == 8 && day > 23) || (month == 9 && day < 24)) {
    console.log("Basak");
} else if ((month == 9 && day > 23) || (month == 10 && day < 24)) {
    console.log("Terazi");
} else if ((month == 10 && day > 23) || (month == 11 && day < 23)) {
    console.log("Akrep");
} else if ((month == 11 && day > 22) || (month == 12 && day < 23)) {
    console.log("Yay");
} else if ((month == 12 && day > 22) || (month == 1 && day < 21)) {
    console.log("Oglak");
}