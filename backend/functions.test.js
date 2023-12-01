const { test, expect } = require('@jest/globals');
const { sum, multiply } = require('./myFile.js');
    
        test('sum test', () => {
            const result = sum(1, 2);
            expect(result).toBeDefined();
        });
    

        test('multiply test', () => {
            const result = multiply(1, 2, 3);
            expect(result).toBeDefined();
        });
    
