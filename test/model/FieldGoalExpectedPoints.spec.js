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
 * Swagger Codegen version: 2.4.39
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
    describe('FieldGoalExpectedPoints', function() {
      beforeEach(function() {
        instance = new cfb.FieldGoalExpectedPoints();
      });

      it('should create an instance of FieldGoalExpectedPoints', function() {
        // TODO: update the code to test FieldGoalExpectedPoints
        expect(instance).to.be.a(cfb.FieldGoalExpectedPoints);
      });

      it('should have the property yardsToGoal (base name: "yardsToGoal")', function() {
        // TODO: update the code to test the property yardsToGoal
        expect(instance).to.have.property('yardsToGoal');
        // expect(instance.yardsToGoal).to.be(expectedValueLiteral);
      });

      it('should have the property distance (base name: "distance")', function() {
        // TODO: update the code to test the property distance
        expect(instance).to.have.property('distance');
        // expect(instance.distance).to.be(expectedValueLiteral);
      });

      it('should have the property expectedPoints (base name: "expectedPoints")', function() {
        // TODO: update the code to test the property expectedPoints
        expect(instance).to.have.property('expectedPoints');
        // expect(instance.expectedPoints).to.be(expectedValueLiteral);
      });

    });
  });

}));
