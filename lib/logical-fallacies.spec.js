const chai = require('chai');
const assert = chai.assert,
    should = chai.should(),
    expect = chai.expect;
describe("Accent", () => {
    it("The Accent Fallacy is a fallacy of ambiguity due to the different ways a word or syllable is emphasized or accented", () => {
        const func = () => {
            throw new EvalError('Also called Accentus, Misleading Accent, and Prosody');
        }
        func.should.throw(EvalError);
    });
});
describe("Accident", () => {
    it("When we then reason with the generalization as if it has no exceptions, our reasoning contains the Fallacy of Accident. ", () => {
        (+0 === -0).should.not.equal(Object.is(+0, -0));
    });
});
describe("Ad Hoc Rescue", () => {
    it("try to rescue a cherished belief from trouble", () => {
        const func1 = () => {
            decodeURIComponent('%');
        }
        func1.should.throw(URIError);
    });
});
describe('Ad Hominem', () => {
    it('make an irrelevant attack on the arguer and suggest that this attack undermines the argument itself', () => {
        (() => {
            throw new TypeError()
        }).should.throw(TypeError, '', 'That reasoning should stand or fall on the scientific evidence, not on the arguer\'s age or anything else about her personally.');
    })
});
describe('Affirming the Consequent', () => {
    it('A conditional is an if-then statement; the if-part is the antecedent, and the then-part is the consequent', () => {
        const affirmConsequent=(former=true,consequent=false);
        affirmConsequent.should.equal(false,'A conditional is an if-then statement; the if-part is the antecedent, and the then-part is the consequent');
    })
})
