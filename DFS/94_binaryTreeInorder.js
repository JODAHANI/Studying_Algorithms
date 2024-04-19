const inorderTraversal = function (root) {
  const arr = [];

  const dfs = (node) => {
    if (node !== null) {
      dfs(node.left);
      arr.push(node.val);
      dfs(node.right);
    }
  };
  if (root?.val) {
    dfs(root);
  }
  return arr;
};
