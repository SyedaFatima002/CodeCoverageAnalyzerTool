
 const { sum, multiply } = require('./myFile.ts');
 
     test('sum test', () => {
         const result = sum(4882315165564928, 2304606520475648);
         expect(result).toBeDefined();
     });
 

     test('multiply test', () => {
         const result = multiply(6198035516227584, 6829160127266816, 3487950948007936);
         expect(result).toBeDefined();
     });
 
