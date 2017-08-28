var countries = require(protractor.basePath+'/countries.json'),
req = require('supertest');
var expect = require('chai').expect;
const express = require('express');
const app = express();



describe('Api story',function(){
    var response;
    countries.forEach(function (data) {
        var countryName = data.name;
        var countryCode = data.code;
        var responseName;
        it('Should get 200 & return valid data',function() {
            var url ='https://restcountries.eu/rest/v2/alpha/'+countryCode;
            req(url).get(url)
                .expect(200)
                .expect('Content-Type', 'application/json')
                .end(function (err, res) {
                    console.log(res);
                    if (err) {
                        throw err;
                    } else {
                        response = JSON.parse(res.text);
                        responseName = response.name;
                    }
                    expect(response).to.include.keys('name');
                    expect(responseName).to.eql(countryName);
                    expect(response.iso639_1).toMatch(/^[A-za-z]{2}$/g);
                    expect(response.alpha2Code).to.eql(countryCode);
                    done();
                });
        });


    });

})
