
const Calculator = {
  num: 0,
  set(num) {
    this.num = num;
    return this;
  },

  add(a) {
    this.num += a;
    return this;
  },

  subtract(a) {
    this.num -= a;
    return this;
  },

  multiply(a) {
    this.num *= a;
    return this;
  },

  divide(a) {
    this.num /= a;
    return this;
  },
  
  get() {
    console.log(this.num);
    return this;
  }
};

Calculator.set(20).add(5).sub(20).mul(5).div(6).get();