/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.5.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.33
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
    describe('TeamFPIRatingResumeRanks', function() {
      beforeEach(function() {
        instance = new cfb.TeamFPIRatingResumeRanks();
      });

      it('should create an instance of TeamFPIRatingResumeRanks', function() {
        // TODO: update the code to test TeamFPIRatingResumeRanks
        expect(instance).to.be.a(cfb.TeamFPIRatingResumeRanks);
      });

      it('should have the property strengthOfRecord (base name: "strengthOfRecord")', function() {
        // TODO: update the code to test the property strengthOfRecord
        expect(instance).to.have.property('strengthOfRecord');
        // expect(instance.strengthOfRecord).to.be(expectedValueLiteral);
      });

      it('should have the property fpi (base name: "fpi")', function() {
        // TODO: update the code to test the property fpi
        expect(instance).to.have.property('fpi');
        // expect(instance.fpi).to.be(expectedValueLiteral);
      });

      it('should have the property averageWinProbability (base name: "averageWinProbability")', function() {
        // TODO: update the code to test the property averageWinProbability
        expect(instance).to.have.property('averageWinProbability');
        // expect(instance.averageWinProbability).to.be(expectedValueLiteral);
      });

      it('should have the property strengthOfSchedule (base name: "strengthOfSchedule")', function() {
        // TODO: update the code to test the property strengthOfSchedule
        expect(instance).to.have.property('strengthOfSchedule');
        // expect(instance.strengthOfSchedule).to.be(expectedValueLiteral);
      });

      it('should have the property remainingStrengthOfSchedule (base name: "remainingStrengthOfSchedule")', function() {
        // TODO: update the code to test the property remainingStrengthOfSchedule
        expect(instance).to.have.property('remainingStrengthOfSchedule');
        // expect(instance.remainingStrengthOfSchedule).to.be(expectedValueLiteral);
      });

      it('should have the property gameControl (base name: "gameControl")', function() {
        // TODO: update the code to test the property gameControl
        expect(instance).to.have.property('gameControl');
        // expect(instance.gameControl).to.be(expectedValueLiteral);
      });

    });
  });

}));
