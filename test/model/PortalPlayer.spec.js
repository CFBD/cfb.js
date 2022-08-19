/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.27
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
    describe('PortalPlayer', function() {
      beforeEach(function() {
        instance = new cfb.PortalPlayer();
      });

      it('should create an instance of PortalPlayer', function() {
        // TODO: update the code to test PortalPlayer
        expect(instance).to.be.a(cfb.PortalPlayer);
      });

      it('should have the property season (base name: "season")', function() {
        // TODO: update the code to test the property season
        expect(instance).to.have.property('season');
        // expect(instance.season).to.be(expectedValueLiteral);
      });

      it('should have the property firstName (base name: "firstName")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "lastName")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property position (base name: "position")', function() {
        // TODO: update the code to test the property position
        expect(instance).to.have.property('position');
        // expect(instance.position).to.be(expectedValueLiteral);
      });

      it('should have the property origin (base name: "origin")', function() {
        // TODO: update the code to test the property origin
        expect(instance).to.have.property('origin');
        // expect(instance.origin).to.be(expectedValueLiteral);
      });

      it('should have the property destination (base name: "destination")', function() {
        // TODO: update the code to test the property destination
        expect(instance).to.have.property('destination');
        // expect(instance.destination).to.be(expectedValueLiteral);
      });

      it('should have the property transferDate (base name: "transferDate")', function() {
        // TODO: update the code to test the property transferDate
        expect(instance).to.have.property('transferDate');
        // expect(instance.transferDate).to.be(expectedValueLiteral);
      });

      it('should have the property rating (base name: "rating")', function() {
        // TODO: update the code to test the property rating
        expect(instance).to.have.property('rating');
        // expect(instance.rating).to.be(expectedValueLiteral);
      });

      it('should have the property stars (base name: "stars")', function() {
        // TODO: update the code to test the property stars
        expect(instance).to.have.property('stars');
        // expect(instance.stars).to.be(expectedValueLiteral);
      });

      it('should have the property eligibility (base name: "eligibility")', function() {
        // TODO: update the code to test the property eligibility
        expect(instance).to.have.property('eligibility');
        // expect(instance.eligibility).to.be(expectedValueLiteral);
      });

    });
  });

}));
