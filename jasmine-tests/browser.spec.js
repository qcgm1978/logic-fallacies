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
describe('devtools', () => {
    it('Timing breakdown phases explained', () => {
        `Queueing.The browser queues requests when:
        There are higher priority requests.
        There are already six TCP connections open for this origin, which is the limit.Applies to HTTP / 1.0 and HTTP / 1.1 only.
        The browser is briefly allocating space in the disk cache
        Stalled.The request could be stalled for any of the reasons described in Queueing.
        DNS Lookup.The browser is resolving the request's IP address.
        Proxy negotiation.The browser is negotiating the request with a proxy server.
        Request sent.The request is being sent.
        ServiceWorker Preparation.The browser is starting up the service worker.
        Request to ServiceWorker.The request is being sent to the service worker.
            Waiting(TTFB).The browser is waiting for the first byte of a response.TTFB stands for Time To First Byte.This timing includes 1 round trip of latency and the time the server took to prepare the response.
        Content Download.The browser is receiving the response.
        Receiving Push.The browser is receiving data for this response via HTTP / 2 Server Push.
        Reading Push.The browser is reading the local data previously received.`
    })
});
describe('API', () => {
    it('url.searchParams', () => {
        const url = new URL('http://glodon.com?foo=bar')
        expect(url.searchParams).toBeDefined()
        expect(url.searchParams.get('foo')).toBe('bar')
        url.searchParams.set('hello', 'world')
        expect(url.href).toBe('http://glodon.com/?foo=bar&hello=world');
        const params = new URLSearchParams()
        params.set('hello', 'world')
        expect(params.toString()).toBe('hello=world')
        const body = new URLSearchParams();
        const request = new Request('/', {
            body,
            method: 'post'
        })
        expect(request.headers.get('content-type')).toBe('application/x-www-form-urlencoded;charset=UTF-8')
        const urlNew = new URL('http://foo'), obj = { foo: 'bar', world: 'ends' }
        for (const key of Object.keys(obj)) {
            urlNew.searchParams.set(`hello[${key}]`, obj[key])

        }
        expect(decodeURIComponent(urlNew.href)).toBe('http://foo/?hello[foo]=bar&hello[world]=ends')
    });
    it('Request', () => {
        const request = new Request('http://www.google.com')
    })
})