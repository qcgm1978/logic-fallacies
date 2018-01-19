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
        const affirmConsequent = (former = true, consequent = false);
        affirmConsequent.should.equal(false, 'A conditional is an if-then statement; the if-part is the antecedent, and the then-part is the consequent');
    })
});
describe('Anecdotal Evidence', () => {
    it('reasoning contains the fallacy of overemphasizing anecdotal evidence', () => {
        (NaN === NaN).should.not.equal(undefined === undefined, 'generalizing on the basis of a some story that provides an inadequate sample');
    })
});
describe('Anthropomorphism', () => {
    it('called the Disney Fallacy or the Walt Disney Fallacy', () => {
        ( () => {
            eval('variable');
        }).should.throw(ReferenceError, '','Animals are likely to have some human emotions, but not the ability to ascribe knowledge to other beings. They have different syntax');
    })
});
describe('Appeal to Authority', () => {
    it('it is fallacious to accept the words of a supposed authority when we should be suspicious of the authority\'s words.', () => {
        (()=>{const authority=window}).should.throw(ReferenceError,'','The film star is an authority on how to act, not on which watch is best for you. It is a reference error of others');
    })
});
describe('Appeal to Emotions', () => {
    it('the appeal arouses your feelings of anger, fear, grief, love, outrage, pity, pride, sexuality, sympathy, relief, and so forth', () => {
        (true).should.equal(false, '');
    })
});