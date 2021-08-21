/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.6
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

  describe('(package)', function() {
    describe('ReturningProduction', function() {
      beforeEach(function() {
        instance = new cfb.ReturningProduction();
      });

      it('should create an instance of ReturningProduction', function() {
        // TODO: update the code to test ReturningProduction
        expect(instance).to.be.a(cfb.ReturningProduction);
      });

      it('should have the property season (base name: "season")', function() {
        // TODO: update the code to test the property season
        expect(instance).to.have.property('season');
        // expect(instance.season).to.be(expectedValueLiteral);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property conference (base name: "conference")', function() {
        // TODO: update the code to test the property conference
        expect(instance).to.have.property('conference');
        // expect(instance.conference).to.be(expectedValueLiteral);
      });

      it('should have the property totalPPA (base name: "totalPPA")', function() {
        // TODO: update the code to test the property totalPPA
        expect(instance).to.have.property('totalPPA');
        // expect(instance.totalPPA).to.be(expectedValueLiteral);
      });

      it('should have the property totalPassingPPA (base name: "totalPassingPPA")', function() {
        // TODO: update the code to test the property totalPassingPPA
        expect(instance).to.have.property('totalPassingPPA');
        // expect(instance.totalPassingPPA).to.be(expectedValueLiteral);
      });

      it('should have the property totalReceivingPPA (base name: "totalReceivingPPA")', function() {
        // TODO: update the code to test the property totalReceivingPPA
        expect(instance).to.have.property('totalReceivingPPA');
        // expect(instance.totalReceivingPPA).to.be(expectedValueLiteral);
      });

      it('should have the property totalRushingPPA (base name: "totalRushingPPA")', function() {
        // TODO: update the code to test the property totalRushingPPA
        expect(instance).to.have.property('totalRushingPPA');
        // expect(instance.totalRushingPPA).to.be(expectedValueLiteral);
      });

      it('should have the property percentPPA (base name: "percentPPA")', function() {
        // TODO: update the code to test the property percentPPA
        expect(instance).to.have.property('percentPPA');
        // expect(instance.percentPPA).to.be(expectedValueLiteral);
      });

      it('should have the property percentPassingPPA (base name: "percentPassingPPA")', function() {
        // TODO: update the code to test the property percentPassingPPA
        expect(instance).to.have.property('percentPassingPPA');
        // expect(instance.percentPassingPPA).to.be(expectedValueLiteral);
      });

      it('should have the property percentReceivingPPA (base name: "percentReceivingPPA")', function() {
        // TODO: update the code to test the property percentReceivingPPA
        expect(instance).to.have.property('percentReceivingPPA');
        // expect(instance.percentReceivingPPA).to.be(expectedValueLiteral);
      });

      it('should have the property percentRushingPPA (base name: "percentRushingPPA")', function() {
        // TODO: update the code to test the property percentRushingPPA
        expect(instance).to.have.property('percentRushingPPA');
        // expect(instance.percentRushingPPA).to.be(expectedValueLiteral);
      });

      it('should have the property usage (base name: "usage")', function() {
        // TODO: update the code to test the property usage
        expect(instance).to.have.property('usage');
        // expect(instance.usage).to.be(expectedValueLiteral);
      });

      it('should have the property passingUsage (base name: "passingUsage")', function() {
        // TODO: update the code to test the property passingUsage
        expect(instance).to.have.property('passingUsage');
        // expect(instance.passingUsage).to.be(expectedValueLiteral);
      });

      it('should have the property receivingUsage (base name: "receivingUsage")', function() {
        // TODO: update the code to test the property receivingUsage
        expect(instance).to.have.property('receivingUsage');
        // expect(instance.receivingUsage).to.be(expectedValueLiteral);
      });

      it('should have the property rushingUsage (base name: "rushingUsage")', function() {
        // TODO: update the code to test the property rushingUsage
        expect(instance).to.have.property('rushingUsage');
        // expect(instance.rushingUsage).to.be(expectedValueLiteral);
      });

    });
  });

}));
