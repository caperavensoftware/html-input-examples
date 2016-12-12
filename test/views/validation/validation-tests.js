
import {expect} from 'chai';
import 'aurelia-polyfills';
import {Validation} from './../../../src/views/validation/validation';

describe('Validation Tests', function() {
    var validation;

    beforeEach(function() {
        validation = new Validation ();
    });
    
    it('constructor', function() {
        expect(validation).to.not.be.null;
    });
    
    it('not constructor', function() {
        expect(() => Validation()).to.throw("Cannot call a class as a function");
    });    
})
