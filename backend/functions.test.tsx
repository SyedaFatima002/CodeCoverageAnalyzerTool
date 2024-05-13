
 const { sum, multiply, subtract } = require('./uploads/newFile.ts');
 
        test('sum test 1', () => {
            const result = sum(3375650748497920, 472509738647552);
            expect(result).toBe(2305479965409280);
        });

        test('sum test 2', () => {
            const result = sum(1186745836109824, 4249794023260160);
            expect(result).toBe(4425207678763008);
        });

        test('sum test 3', () => {
            const result = sum(4813939649019904, 4380877905723392);
            expect(result).toBe(3340207965339648);
        });

        test('sum test 4', () => {
            const result = sum(6172110193950720, 6556223094652928);
            expect(result).toBe(8173858068627456);
        });

        test('multiply test 1', () => {
            const result = multiply(7265150929207296, 8181826830991360, 4416642064842752);
            expect(result).toBe(5581750688284672);
        });

        test('multiply test 2', () => {
            const result = multiply(4561647790194688, 2931350990487552, 939316381483008);
            expect(result).toBe(2546844001370112);
        });

        test('subtract test 1', () => {
            const result = subtract(5635429692866560, 7197241875890176);
            expect(result).toBe(3473155653894144);
        });

        test('subtract test 2', () => {
            const result = subtract(400572301705216, 4616288118767616);
            expect(result).toBe(5387615224201216);
        });
