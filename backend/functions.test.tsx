
 const { sum, multiply, subtract } = require('./uploads/newFile.ts');
 
        test('sum test 1', () => {
            const result = sum(6127463214088192, 2590430562615296);
            expect(result).toBe(2775312171532288);
        });

        test('sum test 2', () => {
            const result = sum(2984836463591424, 5237991339458560);
            expect(result).toBe(7282759141687296);
        });

        test('sum test 3', () => {
            const result = sum(4162218316791808, 5971146272931840);
            expect(result).toBe(7631366120275968);
        });

        test('sum test 4', () => {
            const result = sum(7863599638773760, 2200546054242304);
            expect(result).toBe(3380772169842688);
        });

        test('multiply test 1', () => {
            const result = multiply(4035054269366272, 1222228557430784, 5771533848936448);
            expect(result).toBe(7821090405482496);
        });

        test('multiply test 2', () => {
            const result = multiply(7917791738855424, 7290037196554240, 1876127953977344);
            expect(result).toBe(2720292352819200);
        });

        test('subtract test 1', () => {
            const result = subtract(7505661912940544, 2000344114528256);
            expect(result).toBe(4462362195132416);
        });

        test('subtract test 2', () => {
            const result = subtract(4147008684163072, 2814937558679552);
            expect(result).toBe(2345066116939776);
        });
