import { Counter } from "./counter"

describe("Counter", ()=>
{

  let cnt : Counter
  beforeEach(()=> {cnt = new Counter()});

  it("powinnien zwiększyć licznik o 1",()=>
  {

    expect(cnt.increment()).toBe(1);
  });

  it("powinien zmniejszyć licznik o 1", ()=>
  {


    expect(cnt.decrement()).toBe(-1);
  });
})
