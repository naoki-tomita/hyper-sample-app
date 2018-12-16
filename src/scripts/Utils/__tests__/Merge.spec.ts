import { merge, shallowMerge } from "../Merge";

describe("merge", () => {
  const tests: Array<{
    a: any;
    b: any;
    expects: any;
  }> = [
    {
      a: {},
      b: {},
      expects: {},
    },
    {
      a: { foo: undefined },
      b: {},
      expects: { foo: undefined },
    },
    {
      a: { foo: "" },
      b: {},
      expects: { foo: "" },
    },
    {
      a: { foo: "" },
      b: { bar: "" },
      expects: { foo: "", bar: "" },
    },
    {
      a: { foo: { foo: "" } },
      b: { bar: {} },
      expects: { foo: { foo: "" }, bar: {} },
    },
    {
      a: { foo: { foo: "" } },
      b: { foo: { bar: "" } },
      expects: { foo: { foo: "", bar: "" } },
    },
    {
      a: { foo: "a" },
      b: { foo: "b" },
      expects: { foo: "b" },
    },
    {
      a: { foo: null },
      b: { foo: {} },
      expects: { foo: {} },
    },
    {
      a: { foo: {} },
      b: { foo: null },
      expects: { foo: null },
    },
  ];
  tests.forEach(({ a, b, expects }) => {
    it(`should merge a, b`, () => {
      expect(merge(a, b)).toEqual(expects);
    });
  });
});

describe("shallowMerge", () => {
  const tests = [
    {
      a: {},
      b: {},
      expects: {},
    },
    {
      a: { foo: undefined },
      b: {},
      expects: { foo: undefined },
    },
    {
      a: { foo: "" },
      b: {},
      expects: { foo: "" },
    },
    {
      a: { foo: "" },
      b: { bar: "" },
      expects: { foo: "", bar: "" },
    },
    {
      a: { foo: { foo: "" } },
      b: { bar: {} },
      expects: { foo: { foo: "" }, bar: {} },
    },
    {
      a: { foo: { foo: "" } },
      b: { foo: { bar: "" } },
      expects: { foo: { bar: "" } },
    },
    {
      a: { foo: "a" },
      b: { foo: "b" },
      expects: { foo: "b" },
    },
    {
      a: { foo: null },
      b: { foo: {} },
      expects: { foo: {} },
    },
    {
      a: { foo: {} },
      b: { foo: null },
      expects: { foo: null },
    },
  ];

  tests.forEach(({ a, b, expects }) => {
    it("should shallow merge.", () => {
      expect(shallowMerge(a, b)).toEqual(expects);
    });
  });
});
