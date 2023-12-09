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
 * Swagger Codegen version: 2.4.37
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
    describe('ConferenceSPRatingOffense', function() {
      beforeEach(function() {
        instance = new cfb.ConferenceSPRatingOffense();
      });

      it('should create an instance of ConferenceSPRatingOffense', function() {
        // TODO: update the code to test ConferenceSPRatingOffense
        expect(instance).to.be.a(cfb.ConferenceSPRatingOffense);
      });

      it('should have the property rating (base name: "rating")', function() {
        // TODO: update the code to test the property rating
        expect(instance).to.have.property('rating');
        // expect(instance.rating).to.be(expectedValueLiteral);
      });

      it('should have the property success (base name: "success")', function() {
        // TODO: update the code to test the property success
        expect(instance).to.have.property('success');
        // expect(instance.success).to.be(expectedValueLiteral);
      });

      it('should have the property explosiveness (base name: "explosiveness")', function() {
        // TODO: update the code to test the property explosiveness
        expect(instance).to.have.property('explosiveness');
        // expect(instance.explosiveness).to.be(expectedValueLiteral);
      });

      it('should have the property rushing (base name: "rushing")', function() {
        // TODO: update the code to test the property rushing
        expect(instance).to.have.property('rushing');
        // expect(instance.rushing).to.be(expectedValueLiteral);
      });

      it('should have the property passing (base name: "passing")', function() {
        // TODO: update the code to test the property passing
        expect(instance).to.have.property('passing');
        // expect(instance.passing).to.be(expectedValueLiteral);
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

      it('should have the property runRate (base name: "runRate")', function() {
        // TODO: update the code to test the property runRate
        expect(instance).to.have.property('runRate');
        // expect(instance.runRate).to.be(expectedValueLiteral);
      });

      it('should have the property pace (base name: "pace")', function() {
        // TODO: update the code to test the property pace
        expect(instance).to.have.property('pace');
        // expect(instance.pace).to.be(expectedValueLiteral);
      });

    });
  });

}));
