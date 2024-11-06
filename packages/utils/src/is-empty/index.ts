/**
 * 判断目标是否为空对象或空数组
 *
 * @param target - 目标，可以是任何类型
 * @returns 如果是空对象或空数组返回 true，否则返回 false
 */
export function isEmpty(target: any): target is object | any[] {
  if (target === null) return true;
  if (Array.isArray(target)) return target.length === 0;
  if (typeof target === 'object') return Object.keys(target).length === 0;
  return false;
}
