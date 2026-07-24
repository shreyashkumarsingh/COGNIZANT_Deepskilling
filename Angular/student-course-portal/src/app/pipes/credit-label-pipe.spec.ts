import { CreditLabelPipe } from './credit-label-pipe';

describe('CreditLabelPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditLabelPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms 1 to "1 Credit"', () => {
    const pipe = new CreditLabelPipe();
    expect(pipe.transform(1)).toBe('1 Credit');
  });

  it('transforms 3 to "3 Credits"', () => {
    const pipe = new CreditLabelPipe();
    expect(pipe.transform(3)).toBe('3 Credits');
  });

  it('transforms null to "No Credits"', () => {
    const pipe = new CreditLabelPipe();
    expect(pipe.transform(null)).toBe('No Credits');
  });
});
