const n = 22;
const w = 6;
const num = 11;

// 조다한
function solution(n, w, num) {
  const arr = [];

  let cnt = 1;
  let newArr = [];
  let isRight = true;

  for (let i = 1; i <= n; i++) {
    if (cnt === w + 1) {
      arr.push(newArr);
      newArr = [];
      cnt = 1;
      isRight = !isRight;
    }
    if (isRight) {
      newArr.push({
        val: i,
        cnt: cnt,
      });
    } else {
      newArr.push({
        val: i,
        cnt: w - cnt + 1,
      });
    }
    cnt++;
  }
  if (newArr.length) arr.push(newArr);

  let result = 0;
  let resultCnt = 0;

  for (let i = Math.floor(n / num) - 1; i < arr.length; i++) {
    arr[i].map((item) => {
      if (item.val === num) {
        result++;
        resultCnt = item.cnt;
        return;
      }
      if (item.cnt === resultCnt) {
        result++;
      }
    });
  }
  console.log(result);
}

solution(n, w, num);

// 익현님
function solution(n, w, num) {
  const size = Math.floor(n / w) + (n % w > 0 ? 1 : 0);
  let boxs = Array(size);
  for (let i = 0; i < size; i++) {
    boxs[i] = Array(w).fill(0);
  }

  let i = 1;
  let x = size - 1;
  let y = 0;
  let move = 1;
  let location = [0, 0];
  while (i <= n) {
    boxs[x][y] = i;
    if (i === num) {
      location[0] = x;
      location[1] = y;
    }
    if (i % w === 0) {
      x -= 1;
      move = move * -1;
    } else {
      y += move;
    }

    i++;
  }
  boxs.forEach((box, i) => {
    console.log(box);
  });
  return location[0] + (boxs[0][location[1]] === 0 ? 0 : 1);
}

console.log(solution(22, 6, 8));
console.log(solution(13, 3, 6));
