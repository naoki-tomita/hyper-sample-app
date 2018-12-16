export function merge<A, B>(a: A, b: B): A & B {
  const keys = uniqueKeys(a, b);
  return keys.reduce<any>((dst, key) => {
    dst[key] = get(a, b, key);
    return dst;
  }, {});
}

function get(a: any, b: any, key: string): any {
  const bType = typeof b[key];
  switch (bType) {
    case "undefined":
      return typeof a[key] === "undefined" ? undefined : get(b, a, key);
    case "object":
      return b[key] === null ? null : merge(a[key], b[key]);
    default:
      return b[key];
  }
}

function uniqueKeys(a: any, b: any) {
  return [...new Set([...Object.keys(a || {}), ...Object.keys(b || {})])];
}

interface ShallowMerge {
  <A, B>(...args: [A, B]): A & B;
  <A, B, C>(...args: [A, B, C]): A & B & C;
  <A, B, C, D>(...args: [A, B, C, D]): A & B & C & D;
  <A, B, C, D, E>(...args: [A, B, C, D, E]): A & B & C & D & E;
}

export const shallowMerge: ShallowMerge = (...args: any[]) => {
  const dst: any = {};
  args.forEach(x => {
    Object.keys(x).forEach(key => {
      dst[key] = (x as any)[key];
    });
  });
  return dst;
};
