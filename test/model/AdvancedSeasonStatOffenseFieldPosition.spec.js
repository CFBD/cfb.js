/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.5.2
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.41
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
    describe('AdvancedSeasonStatOffenseFieldPosition', function() {
      beforeEach(function() {
        instance = new cfb.AdvancedSeasonStatOffenseFieldPosition();
      });

      it('should create an instance of AdvancedSeasonStatOffenseFieldPosition', function() {
        // TODO: update the code to test AdvancedSeasonStatOffenseFieldPosition
        expect(instance).to.be.a(cfb.AdvancedSeasonStatOffenseFieldPosition);
      });

      it('should have the property averageStart (base name: "averageStart")', function() {
        // TODO: update the code to test the property averageStart
        expect(instance).to.have.property('averageStart');
        // expect(instance.averageStart).to.be(expectedValueLiteral);
      });

      it('should have the property averagePredictedPoints (base name: "averagePredictedPoints")', function() {
        // TODO: update the code to test the property averagePredictedPoints
        expect(instance).to.have.property('averagePredictedPoints');
        // expect(instance.averagePredictedPoints).to.be(expectedValueLiteral);
      });

    });
  });

}));
