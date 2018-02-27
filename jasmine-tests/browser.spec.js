describe(' Intro to Chrome User Experience Report', () => {
    it('Network Information API', () => {
        const rtt = navigator.connection.rtt,
            downlink = navigator.connection.downlink,
            effectiveType = navigator.connection.effectiveType;
        !navigator.userAgent && expect(rtt).toEqual(0);
        expect(downlink).toBeGreaterThan(0.);
        expect(effectiveType).toMatch(/2g|3g|4g/);
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
        var http = new XMLHttpRequest();
        http.open('GET', 'task.js', false);
        http.send();

        var workerCode = http.responseText;
        onmessage({ data: [{ foo: 1 }, { foo: 2 }, { foo: 3 }] });
        const worker = new Worker('task.js');
        worker.addEventListener('message', function (e) {
            // not support the task.js path, so the following not execute
            expect(true).toBeFalsy()
            console.log('Worker said: ', e.data);
            done();
        }, false);
        expect(worker.postMessage('Hello World')).toEqual(undefined);

    })
});