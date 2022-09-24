/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.8
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
    describe('AdvancedSeasonStatOffenseStandardDowns', function() {
      beforeEach(function() {
        instance = new cfb.AdvancedSeasonStatOffenseStandardDowns();
      });

      it('should create an instance of AdvancedSeasonStatOffenseStandardDowns', function() {
        // TODO: update the code to test AdvancedSeasonStatOffenseStandardDowns
        expect(instance).to.be.a(cfb.AdvancedSeasonStatOffenseStandardDowns);
      });

      it('should have the property rate (base name: "rate")', function() {
        // TODO: update the code to test the property rate
        expect(instance).to.have.property('rate');
        // expect(instance.rate).to.be(expectedValueLiteral);
      });

      it('should have the property ppa (base name: "ppa")', function() {
        // TODO: update the code to test the property ppa
        expect(instance).to.have.property('ppa');
        // expect(instance.ppa).to.be(expectedValueLiteral);
      });

      it('should have the property successRate (base name: "successRate")', function() {
        // TODO: update the code to test the property successRate
        expect(instance).to.have.property('successRate');
        // expect(instance.successRate).to.be(expectedValueLiteral);
      });

      it('should have the property explosiveness (base name: "explosiveness")', function() {
        // TODO: update the code to test the property explosiveness
        expect(instance).to.have.property('explosiveness');
        // expect(instance.explosiveness).to.be(expectedValueLiteral);
      });

    });
  });

}));
