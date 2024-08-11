// polyfill array.includes

if (!Array.prototype.customIncludes) {
  Array.prototype.customIncludes = function (e) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === e) {
        return true;
      }
    }
    return false;
  };
}

const array = [1, 2, 3, 4, 5];

console.log(array.customIncludes(2));
console.log(array.customIncludes(7));
