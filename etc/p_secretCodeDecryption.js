function solution(n, q, ans) {
  var answer = 0;
  const size = ans.length;

  const recursive = (index, arr) => {
    // 비밀코드 5개 만들었을때
    if (arr.length >= 5) {
      let flag = true;

      for (let i = 0; i < size; i++) {
        let count = 0;
        arr.forEach((num) => {
          if (q[i].includes(num)) {
            count++;
          }
        });
        // 비밀 코드하고 q[i]번째와 ans[i]개수와 일치 하지 않않으면 바로 종료
        if (count !== ans[i]) {
          flag = false;
          break;
        }
      }

      // 전체 탐색 했을때 모두다 일치 했을때
      if (flag) {
        answer++;
      }
    } else {
      // 오름 차순으로 이전 저장 한것 +1 부터 해서 n까지 하나씩 집어 넣음
      for (let i = index; i <= n; i++) {
        arr.push(i);
        recursive(i + 1, arr);
        arr.pop();
      }
    }
  };

  recursive(1, []);
  return answer;
}

// let n = 10;
// let q = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [3, 7, 8, 9, 10],
//   [2, 5, 7, 9, 10],
//   [3, 4, 5, 6, 7],
// ];
// let ans = [2, 3, 4, 3, 3];
// console.log(solution(n, q, ans));
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
