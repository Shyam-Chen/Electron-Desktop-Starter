export interface TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;
}

export const hasPathSum = (root: TreeNode, sum: number): boolean => {
  if (!root) return false;

  sum -= root.val;

  if (!root.left && !root.right) {
    return sum === 0;
  }

  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};
