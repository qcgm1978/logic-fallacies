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
        const total = 4900, me = 2000, her = 1500, cigarette = 30 * 10, supper = 20 * 10, medicine = 100, taxi = 15 * 6 + 10, timeConvertMoney = 10 / 60 * 30 * (23000 / 21 / 8), happiness = Infinity;
        expect(timeConvertMoney).toBeGreaterThan(650)
        expect(me + her + cigarette + supper + medicine + taxi + timeConvertMoney + happiness).toBeGreaterThan(total)

    })
});
describe('Progressive Web App', () => {
    it(' It loads quickly, even on flaky networks, sends relevant push notifications, has an icon on the home screen, and loads as a top-level, full screen experience', () => {
        const PWA = 'PRCAFSDRIL', contents = 'Progressive, Responsive, Connectivity independent, App-like, Fresh, Safe, Discoverable, Re-engageable, Installable, Linkable';
        const arr = contents.match(/[A-Z]/g);
        // console.log(arr)
        expect(arr.join('')).toEqual(PWA)
    })
});
describe('Star Wars', () => {
    it('Theatrical films', () => {

        const originalTrilogy = ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi',], prequelTrilogy = ['The Phantom Menace', 'Attack of the clones', 'Revenge of the Sith'], sequelTrilogy = ['The force Awakens', 'The Last Jedi', '']
        expect(originalTrilogy.concat(prequelTrilogy, sequelTrilogy).length).toBe(9)
    })
});
describe('Munsell Color System', () => {
    it(' For this reason alone the system proposed by Mr. Munsell, with its three dimensions of hue, value, and chroma, is a decided step in advance over any previous proposition', () => {
        const MunsellColSys = ['hue', 'value', 'chroma'], hue = 'hue', value = 'value', chroma = 'chroma';
        expect(MunsellColSys).toContain(hue);
    })
});
describe('Color', () => {
    beforeAll(function () {
        jasmine.addMatchers({
            toBeInRange: function () {
                return {
                    compare: function (actual, expected) {
                        return {
                            pass: actual >= expected[0] && actual <= expected[1]
                        };
                    }
                };
            }
        });
    })
    it('This perception of color derives from the stimulation of cone cells in the human eye by electromagnetic radiation in the spectrum of light', () => {
        // peaking near 564–580 nm(red); medium - wavelength, peaking near 534–545 nm(green); and short - wavelength light, near 420–440 nm(blue).
        const threeBandsLight = [[564, 580], [534, 545], [420, 440]], red = 570, green = 540, blue = 430;
        expect(red).toBeLessThan(threeBandsLight[0][1]);
        expect(red).toBeGreaterThan(threeBandsLight[0][0]);
        expect(red).toBeInRange(threeBandsLight[0]);
    });
    it(`A viewer's perception of the object's color depends not only on the spectrum of the light leaving its surface, but also on a host of contextual cues, so that color differences between objects can be discerned mostly independent of the lighting spectrum, viewing angle, etc. This effect is known as color constancy.`, () => {

    })
})