/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.5
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.28
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

  describe('(package)', function() {
    describe('BoxScoreTeamsSuccessRates', function() {
      beforeEach(function() {
        instance = new cfb.BoxScoreTeamsSuccessRates();
      });

      it('should create an instance of BoxScoreTeamsSuccessRates', function() {
        // TODO: update the code to test BoxScoreTeamsSuccessRates
        expect(instance).to.be.a(cfb.BoxScoreTeamsSuccessRates);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property overall (base name: "overall")', function() {
        // TODO: update the code to test the property overall
        expect(instance).to.have.property('overall');
        // expect(instance.overall).to.be(expectedValueLiteral);
      });

      it('should have the property standardDowns (base name: "standardDowns")', function() {
        // TODO: update the code to test the property standardDowns
        expect(instance).to.have.property('standardDowns');
        // expect(instance.standardDowns).to.be(expectedValueLiteral);
      });

      it('should have the property passingDowns (base name: "passingDowns")', function() {
        // TODO: update the code to test the property passingDowns
        expect(instance).to.have.property('passingDowns');
        // expect(instance.passingDowns).to.be(expectedValueLiteral);
      });

    });
  });

}));
