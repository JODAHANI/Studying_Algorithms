const A = [1, 3, 2, 4],
  B = [3, 1, 2, 4];
// const A = [1, 2, 3],
//   B = [2, 3, 1];

const result = [];
for (let i = 0; i < A.length; i++) {
  let a = A.slice(0, i + 1);
  let b = B.slice(0, i + 1);
  const dic = {};
  a.map((item) => {
    if (!dic[item]) {
      dic[item] = item;
    }
  });
  let cnt = 0;
  b.map((item) => {
    if (dic[item]) {
      cnt++;
    }
  });
  result.push(cnt);
}
