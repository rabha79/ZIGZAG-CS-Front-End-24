// sheet#1
// https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/W

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
rl.on('line', function(input) {
  const [a, s, b, q, c] = input.split(' ');
 
  if (parseInt(a) + parseInt(b) === parseInt(c) ||
      parseInt(a) - parseInt(b) === parseInt(c) ||
      parseInt(a) * parseInt(b) === parseInt(c)) {
    console.log("Yes");
  } else {
    let result;
 
    if (s === '+') {
      result = parseInt(a) + parseInt(b);
    } else if (s === '-') {
      result = parseInt(a) - parseInt(b);
    } else if (s === '*') {
      result = parseInt(a) * parseInt(b);
    }
 
    console.log(result);
  }
 
  rl.close();
});
// https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/R

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
rl.on('line', function(input) {
  const n = parseInt(input);
 
  const years = Math.floor(n / 365);
  const months = Math.floor((n % 365) / 30);
  const days = (n % 365) % 30;
 
  console.log(years + " years");
  console.log(months + " months");
  console.log(days + " days");
 
  rl.close();
});
//  https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/P

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(input) {
  const x = input;
 
  const y = x.substr(0, 1);
  const num = parseInt(y);
 
  if (num % 2 === 0) {
    console.log("EVEN");
  } else {
    console.log("ODD");
  }
 
  rl.close();
});
// https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/K
function min(a, b) {
    return a < b ? a : b;
}
 
function max(a, b) {
    return a > b ? a : b;
}
 
function main() {
    let a, b, c, mn, mx;
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
 
    rl.question('', (input) => {
        const numbers = input.split(' ').map(Number);
        a = numbers[0];
        b = numbers[1];
        c = numbers[2];
 
        mx = max(max(a, b), c);
        mn = min(min(a, b), c);
 
        console.log(mn + " " + mx);
        rl.close();
    });
}
 
main();
// https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/G
function main() {
    let readline = require('readline');
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
 
    rl.question('', (input) => {
        let n = BigInt(input);
        let result = n * (n + BigInt(1)) / BigInt(2);
        console.log(result.toString());
        rl.close();
    });
}
 
main();

// sheet#2
// https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/B
function printEvenNumbers(N) {
    if (N % 2 === 0) {
        for (let i = 2; i <= N; i += 2) {
            console.log(i);
        }
    } else {
        for (let i = 2; i <= N - 1; i += 2) {
            console.log(i);
        }
    }
}
 
function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
 
    rl.question('', (input) => {
        const N = parseInt(input);
        if (N < 2) {
            console.log(-1);
        } else {
            printEvenNumbers(N);
        }
        rl.close();
    });
}
 
main();
// https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/M
function isLuckyNumber(num) {
    while (num > 0) {
        let digit = num % 10;
        if (digit !== 4 && digit !== 7) {
            return false;
        }
        num = Math.floor(num / 10);
    }
    return true;
}
 
function printLuckyNumbers(A, B) {
    let luckyNumbers = [];
    for (let i = A; i <= B; i++) {
        if (isLuckyNumber(i)) {
            luckyNumbers.push(i);
        }
    }
    if (luckyNumbers.length === 0) {
        console.log(-1);
    } else {
        console.log(luckyNumbers.join(' '));
    }
}
 
function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
 
    rl.question('', (input) => {
        const [A, B] = input.split(' ').map(Number);
        printLuckyNumbers(A, B);
        rl.close();
    });
}
 
main();

