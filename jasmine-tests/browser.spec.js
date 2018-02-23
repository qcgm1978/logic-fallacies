describe(' Intro to Chrome User Experience Report', () => {
    it('Network Information API', () => {
        const rtt = navigator.connection.rtt,
            downlink = navigator.connection.downlink,
            effectiveType = navigator.connection.effectiveType;
        expect(rtt).toEqual(0);
        expect(downlink).toBeGreaterThan(0.);
        expect(effectiveType).toEqual('4g');
        // expect(navigator.onLine).toBeTruthy()

    });
    it('performance', () => {
        const paint = performance.getEntriesByType('paint');
        expect(paint).toEqual([])
        paint.forEach(element => {
            expect(element.name).toEqual()
        });
    });
    it('Test if Element Supports Attribute', () => {
        const elementSupportsAttribute = (element, attribute) => {
            return attribute in document.createElement(element);
        };
        elementSupportsAttribute("input", "inputmode") && expect(true).toBeFalsy()
    });
    it('Web Workers run in an isolated thread', () => {
        expect(() => new Worker).toThrow();
        expect(() => new Worker('task.js')).not.toThrow();
        expect(new Worker('task.js').postMessage('Hello World')).toEqual(undefined)
    })
})