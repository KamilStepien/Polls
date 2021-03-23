export class Counter
{

  private counter = 0;

  increment():number
  {
    return this.counter--;
  }

  decrement()
  {
    return this.counter--;
  }

}
