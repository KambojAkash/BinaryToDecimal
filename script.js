let btn = document.getElementById("btn");
let answer = document.getElementById("answer");
let inputBox = document.getElementById("inputText");

btn.addEventListener("click", () => {

    let num = Number(inputBox.value);

    if (inputBox.value == "") {
        alert("Please Enter Input ");
        answer.innerText = "Answer in Decimal"

    } else {



        console.log(num)
        let ans = 0;
        let i = 0;
        while (num != 0) {
            var digit = Math.floor(num % 10);
            if (digit == 1) {

                ans = ans + Math.pow(2, i);


            }

            num = num / 10;
            i++;

        }
        console.log(ans)

        answer.innerText = ans;
    }
})

function rest() {
    inputBox.value = "";
    answer.innerText = "Answer in Decimal";

}
// let i = 0;
// let n = 11;
// let ans = 0;
// let last = 0;
// while (n != 0) {
//     last = Math.floor(n % 10);
//     console.log(last);
//     if (last == 1) {
//         ans = ans + Math.pow(2, i);
//     }
//     i = i + 1;
//     n = n / 10;
// }
// console.log(ans)