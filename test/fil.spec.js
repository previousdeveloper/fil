var testData = require('./data/test.json');
var lib = require('../index');
var expect = require('chai').expect;

var fileDef =
    [{
        key: "$date",
        value: "123"
    },
        {
            key: "$startDate",
            value: "10.10.40.60"
        }];


it('replace json with given value', function () {

    lib.parse(testData, fileDef, function (result) {

        expect(result).to.be.a('Object');
        expect(result.body.query.bool.must[0].range.date.gte).to.equal('10.10.40.60');

    });
});