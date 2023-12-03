
 const { sum, multiply } = require('./myFile.ts');
 
        test('sum test 1', () => {
            const result = sum(7995512212946944, 8805830468042752);
            expect(result).toBe(2121642603970560);
        });

        test('sum test 2', () => {
            const result = sum(3717662991450112, 4961264944021504);
            expect(result).toBe(2980280027578368);
        });

        test('sum test 3', () => {
            const result = sum(87706491158528, 5144111426306048);
            expect(result).toBe(6794956094046208);
        });

        test('sum test 4', () => {
            const result = sum(5164774652379136, 6570259175702528);
            expect(result).toBe(2193753615892480);
        });

        test('multiply test 1', () => {
            const result = multiply(2466056356495360, 1557028679974912, 2063511133880320);
            expect(result).toBe(5094917665718272);
        });

        test('multiply test 2', () => {
            const result = multiply(3923655167836160, 7614476048138240, 5194720808534016);
            expect(result).toBe(2487534793785344);
        });

        test('multiply test 3', () => {
            const result = multiply(4693716159692800, 3830059202772992, 1886685702914048);
            expect(result).toBe(566958344896512);
        });

        test('multiply test 4', () => {
            const result = multiply(3121554925813760, 5592153663209472, 4546485758722048);
            expect(result).toBe(7620403780386816);
        });

        test('multiply test 5', () => {
            const result = multiply(4982950273744896, 8407836186902528, 3205706475896832);
            expect(result).toBe(681421700071424);
        });

        test('multiply test 6', () => {
            const result = multiply(6722846751457280, 6661661781917696, 1731219540672512);
            expect(result).toBe(8703248403791872);
        });

        test('multiply test 7', () => {
            const result = multiply(5280216997953536, 5574579070173184, 6146306626027520);
            expect(result).toBe(2713926431145984);
        });

        test('multiply test 8', () => {
            const result = multiply(2547703904993280, 4340421907972096, 8774848144736256);
            expect(result).toBe(7452647105757184);
        });

        test('multiply test 9', () => {
            const result = multiply(7961000869363712, 1502102385852416, 4129288546680832);
            expect(result).toBe(1737664264929280);
        });

        test('multiply test 10', () => {
            const result = multiply(6942765667581952, 6788832059981824, 7743182200635392);
            expect(result).toBe(4603222784212992);
        });

        test('multiply test 11', () => {
            const result = multiply(7862096572186624, 2651572811071488, 4836724068843520);
            expect(result).toBe(2878966652207104);
        });

        test('multiply test 12', () => {
            const result = multiply(7717239474094080, 8375796372602880, 5815300664590336);
            expect(result).toBe(7808313664208896);
        });

        test('multiply test 13', () => {
            const result = multiply(7377440649248768, 1717451815387136, 3132786229641216);
            expect(result).toBe(5354529608433664);
        });

        test('multiply test 14', () => {
            const result = multiply(2659044525342720, 8954884541906944, 8115848180924416);
            expect(result).toBe(7526237167681536);
        });

        test('multiply test 15', () => {
            const result = multiply(6917256741126144, 4703038677712896, 8193707855577088);
            expect(result).toBe(2580937919430656);
        });

        test('multiply test 16', () => {
            const result = multiply(389772436570112, 1362879471157248, 7796542880612352);
            expect(result).toBe(7175807948554240);
        });
