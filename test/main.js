"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodeFileGen = require("../index");
var chai = require("chai");
var filepath = '/tmp/Bonobo - Ketto-4tXFA6jTulk.mp4';
var filepathZero = '/tmp/Bonobo - Ketto-4tXFA6jTulk_000099.mp4';
var options = {
    numberLenght: 5
};
var expect = chai.expect;
describe('Main File Gen Test', function () {
    describe('Next path Test', function () {
        it('generate next path', function () {
            var nextpath = nodeFileGen.nextPath(filepathZero);
            expect(nextpath).to.be.ok;
            expect(nextpath).to.be.a('string');
        });
    });
});
