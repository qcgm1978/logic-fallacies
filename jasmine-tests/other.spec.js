describe('others', () => {
    it('Calling a function before it’s been declared', () => {
        a()
        function a() {
            b()
        }
        function b() {
            expect(true).toBeTruthy()
        }

    });
    it('', () => {
        const filter = document.createElement('filter')
        expect(filter.id).toEqual('')
        filter.setAttribute('id', 'image')
        expect(filter.id).toEqual('image')
        const h1 = document.createElement('h1')
        expect(h1.style.filter).toEqual('')
        h1.style.filter = 'url(#image)'
        expect(h1.style.filter).toEqual('url("#image")')
    });
    it('renting', () => {
        const total = 4900, me = 2000, her = 1500, cigarette = 30 * 10, supper = 20 * 10, medicine = 100, taxi = 15 * 6 + 10, timeConvertMoney = 10 / 60 * 30 * (23000 / 21 / 8),happiness=Infinity;
        expect(timeConvertMoney).toBeGreaterThan(650)
        expect(me+her+cigarette+supper+medicine+taxi+timeConvertMoney+happiness).toBeGreaterThan(total)
        
    })
})