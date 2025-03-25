var subsetXORSum = function (nums) {
  let sum = 0; // 최종 XOR 합을 저장할 변수
  const size = nums.length; // 배열 nums의 길이

  const xorSum = (idx, arr) => {
    sum += arr.reduce((a, b) => a ^ b, 0);

    if (arr.length === size) {
      return;
    }

    for (let i = idx; i < size; i++) {
      arr.push(nums[i]);
      xorSum(i + 1, arr);
      arr.pop();
    }
  };

  // 0번째 index와 빈 배열로 시작
  xorSum(0, []);

  return sum;
};

nums = [5, 1, 6];
console.log(subsetXORSum(nums));
