describe(' Intro to Chrome User Experience Report', () => {
    it('Network Information API', () => {
        const rtt = navigator.connection.rtt,
            downlink = navigator.connection.downlink,
            effectiveType = navigator.connection.effectiveType;
        expect(rtt).toEqual(0);
        expect(downlink).toBeGreaterThan(0.);
        expect(effectiveType).toEqual('4g');
        expect(navigator.onLine).toBeTruthy()

    });
    it('performance', () => {
        const paint = performance.getEntriesByType('paint');
        expect(paint).toEqual([])
        paint.forEach(element => {
            expect(element.name).toEqual()
        });
    })
})