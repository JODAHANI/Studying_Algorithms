const a = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [3, 7, 8, 9, 10],
  [2, 5, 7, 9, 10],
  [3, 4, 5, 6, 7],
];

const ans = [2, 3, 4, 3, 3];

function getCombinations(arr, selectNum) {
  const result = [];
  function dfs(start, selected) {
    if (selected.length === selectNum) {
      result.push([...selected]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      selected.push(arr[i]);
      dfs(i + 1, selected);
      selected.pop();
    }
  }
  dfs(0, []);
  return result;
}

const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
const combinations = getCombinations(numbers, 5);
const arr = a.map((item) => new Set(item));

let result = 0;

combinations.map((item) => {
  const a = item.filter((num) => arr[0].has(num));
  if (a.length !== ans[0]) return;
  const b = item.filter((num) => arr[1].has(num));
  if (b.length !== ans[1]) return;
  const c = item.filter((num) => arr[2].has(num));
  if (c.length !== ans[2]) return;
  const d = item.filter((num) => arr[3].has(num));
  if (d.length !== ans[3]) return;
  const e = item.filter((num) => arr[4].has(num));
  if (e.length !== ans[4]) return;
  result++;
});

// 속도에러
