var levelOrder = function (root) {
  const bfs = (root) => {
    if (!root) return [];
    const queue = [root];
    const result = [];

    while (queue.length > 0) {
      let levelSize = queue.length;
      let levelValues = [];

      for (let i = 0; i < levelSize; i++) {
        const current = queue.shift();
        levelValues.push(current.val);

        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
      }
      result.push(levelValues);
    }

    return result;
  };
  return bfs(root);
};
