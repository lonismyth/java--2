function isPalindrome() {
    var number = document.getElementById("number").value;
    var reversedNumber = parseInt(number.toString().split('').reverse().join(''));
    if (parseInt(number) === reversedNumber) {
        document.getElementById("result").innerHTML = "Число является палиндромом.";
    } else {
        document.getElementById("result").innerHTML = "Число не является палиндромом.";
    }
}
