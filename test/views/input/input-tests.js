
import {expect} from 'chai';
import 'aurelia-polyfills';
import {Input} from './../../../src/views/input/input';

describe('Input Tests', function() {
    var input;

    beforeEach(function() {
        input = new Input ();
    });
    
    it('constructor', function() {
        expect(input).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => Input()).to.throw("Cannot call a class as a function");
    });    
})
