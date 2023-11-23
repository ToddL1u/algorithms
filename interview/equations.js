class equation{
  constructor() {
    this.reset();
  }
  reset() {
    this.plus = this.getRandom(1)> 0;
    let max = this.getRandom(20);
    if(this.plus) {
      this.result = max;
      this.first = this.getRandom(this.result);
      this.second = this.result - this.first;
    } else {
      this.first = max;
      this.second = this.getRandom(this.first);
      this.result = this.first - this.second;
    }
    this.firstBlank = this.getRandom(1) > 0;
    return this;
  }

  getRandom(n) {
    return Math.round(Math.random()*n);
  }

  getResult() {
    this.reset();
    let first= this.getBlankNum(this.first, this.firstBlank);
    let second = this.getBlankNum(this.second, !this.firstBlank);
    let sign = this.plus? "+":"-";
    return  `${first} ${sign} ${second} = ${this.result}`;
  }

  getBlankNum(num, blank) {
    return blank? "__": num;
  }
}

let e = new equation();
new Array(20).fill(0).map(item => {
  console.log(e.getResult())
})