import { TrueOrFalsePipe } from './true-or-false.pipe';

describe('TrueOrFalsePipe', () => {
  it('create an instance', () => {
    const pipe = new TrueOrFalsePipe();
    expect(pipe).toBeTruthy();
  });
});
