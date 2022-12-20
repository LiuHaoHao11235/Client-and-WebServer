import { equal } from "assert";
function sum(array) {
  let sum = 0;
  array.forEach((element) => {
    sum = sum + element;
  });
  return sum;
}
function slice(array) {
  const newarray = array.slice(-1);
  const arr = array;
  return [arr, newarray];
}
describe("計算總合", function () {
  it("總合為11", function () {
    equal(sum([1, 2, 7]), 10);
  });
});
describe("計算slice後的陣列有沒有被更改 並且觀察slice出來的東西", function () {
  it("沒改變", function () {
    let array = [1, 2, 7];
    const [arr] = slice(array);
    equal(arr, array);
  });
  it("slice出來的東西", function () {
    let array = [1, 2, 7];
    const [arr, newarray] = slice(array);
    equal(...newarray, 7);
  });
});
