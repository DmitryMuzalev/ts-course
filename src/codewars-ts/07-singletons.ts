export class SingletonCounter {
  private static instance: SingletonCounter;
  private counter = 0;
  private constructor() {}
  static getInstance() {
    if (!SingletonCounter.instance) {
      SingletonCounter.instance = new SingletonCounter();
    }
    return SingletonCounter.instance;
  }
  public inc() {
    this.counter++;
    return this.counter;
  }
}

const s1 = SingletonCounter.getInstance();
const s2 = SingletonCounter.getInstance();
