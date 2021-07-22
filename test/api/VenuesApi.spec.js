/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.2
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.cfb);
  }
}(this, function(expect, cfb) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new cfb.VenuesApi();
  });

  describe('(package)', function() {
    describe('VenuesApi', function() {
      describe('getVenues', function() {
        it('should call getVenues successfully', function(done) {
          // TODO: uncomment getVenues call and complete the assertions
          /*

          instance.getVenues().then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.Venue);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.capacity).to.be.a('number');
              expect(data.capacity).to.be(0);
              expect(data.grass).to.be.a('boolean');
              expect(data.grass).to.be(false);
              expect(data.city).to.be.a('string');
              expect(data.city).to.be("");
              expect(data.state).to.be.a('string');
              expect(data.state).to.be("");
              expect(data.zip).to.be.a('string');
              expect(data.zip).to.be("");
              expect(data.countryCode).to.be.a('string');
              expect(data.countryCode).to.be("");
              expect(data.location).to.be.a(Object);
              expect(data.location).to.be();
              expect(data.elevation).to.be.a('number');
              expect(data.elevation).to.be();
              expect(data.year).to.be.a('number');
              expect(data.year).to.be(0);
              expect(data.dome).to.be.a('boolean');
              expect(data.dome).to.be(false);
              expect(data.timezone).to.be.a('string');
              expect(data.timezone).to.be("");
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
