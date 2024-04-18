var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const bfs = (node) => {
    const result = [];
    const queue = [node];
    let reverse = true;

    while (queue.length > 0) {
      const floor = queue.length;
      const floorValues = [];

      for (let i = 0; i < floor; i++) {
        const current = queue.shift();
        floorValues.push(current.val);
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
      }
      reverse = !reverse;
      if (reverse) result.push(floorValues.reverse());
      else result.push(floorValues);
    }
    return result;
  };
  return bfs(root);
};
