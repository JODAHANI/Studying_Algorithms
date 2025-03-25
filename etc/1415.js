const str = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

let n = 3;
let k = 9;

var getHappyString = function (n, k) {
  const recursion = (idx, arr) => {
    if (idx === n) return;

    for (let i = 0; i < n; i++) {
      if (arr[i] !== arr[i - 1] || !arr) {
        arr.push(str[i]);
        recursion(0, arr);
      }
    }
  };

  recursion(0, []);
};

getHappyString(n, k);
