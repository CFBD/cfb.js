/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.2.3
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.24
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
    instance = new cfb.CoachesApi();
  });

  describe('(package)', function() {
    describe('CoachesApi', function() {
      describe('getCoaches', function() {
        it('should call getCoaches successfully', function(done) {
          // TODO: uncomment, update parameter values for getCoaches call and complete the assertions
          /*
          var opts = {};
          opts.firstName = "firstName_example";
          opts.lastName = "lastName_example";
          opts.team = "team_example";
          opts.year = 56;
          opts.minYear = 56;
          opts.maxYear = 56;

          instance.getCoaches(opts).then(function(data) {
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(cfb.Coach);
              expect(data.firstName).to.be.a('string');
              expect(data.firstName).to.be("");
              expect(data.lastName).to.be.a('string');
              expect(data.lastName).to.be("");
              expect(data.hireDate).to.be.a('string');
              expect(data.hireDate).to.be("");
              {
                let dataCtr = data.seasons;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Object);
                  expect(data).to.be();
                }
              }
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
