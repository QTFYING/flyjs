import { isEmpty } from './is_empty';

/**
 * 递归遍历数据结构，根据字段名称映射生成新的对象数组。
 *
 * @param {Array<Object>} data - 需要遍历的数据数组。
 * @param {Object} [fieldNames] - 字段名称映射对象，用于将源数据中的字段映射到新对象中。
 * @param {number} [level] - 递归层级限制，如果指定了层级，超过该层级的子节点将不再递归。
 * @returns {Array<Object>} - 生成的新对象数组。
 *
 * @example
 * const data = [
 *   { id: 1, name: 'John', children: [{ id: 2, name: 'Jane' }] },
 *   { id: 3, name: 'Bob', children: [] }
 * ];
 * const fieldNames = { id: 'userId', name: 'userName', children: 'subItems' };
 * const result = fieldNamesLoop(data, fieldNames, 2);
 * console.log(result);
 * // 输出:
 * // [
 * //   { userId: 1, userName: 'John', subItems: [{ userId: 2, userName: 'Jane', subItems: [] }] },
 * //   { userId: 3, userName: 'Bob', subItems: [] }
 * // ]
 */
export const fieldNamesLoop = function (data, fieldNames?, level?) {
  const hasChildrenKey = Object.prototype.hasOwnProperty.call(fieldNames, 'children');
  const _data = data?.map((item) => {
    const child = hasChildrenKey ? item[fieldNames.children] : item.children;
    const needLoop = child?.length > 0 && (level ? item.level < level : true);
    let _obj = {};

    if (!isEmpty(fieldNames)) {
      for (const key in fieldNames) {
        if (fieldNames.hasOwnProperty(key)) {
          _obj[key] = item[fieldNames[key]];
          delete item[fieldNames[key]];
        }
      }
      _obj = { ...item, ..._obj };
    } else {
      _obj = { ...item };
    }

    const _children = hasChildrenKey ? item[fieldNames['children']] : item.children;

    if (needLoop) Object.assign(_obj, { children: fieldNamesLoop(_children, fieldNames, level) });

    return _obj;
  });

  return _data;
};
