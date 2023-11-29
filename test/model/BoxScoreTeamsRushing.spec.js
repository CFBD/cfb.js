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
    describe('BoxScoreTeamsRushing', function() {
      beforeEach(function() {
        instance = new cfb.BoxScoreTeamsRushing();
      });

      it('should create an instance of BoxScoreTeamsRushing', function() {
        // TODO: update the code to test BoxScoreTeamsRushing
        expect(instance).to.be.a(cfb.BoxScoreTeamsRushing);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property powerSuccess (base name: "powerSuccess")', function() {
        // TODO: update the code to test the property powerSuccess
        expect(instance).to.have.property('powerSuccess');
        // expect(instance.powerSuccess).to.be(expectedValueLiteral);
      });

      it('should have the property stuffRate (base name: "stuffRate")', function() {
        // TODO: update the code to test the property stuffRate
        expect(instance).to.have.property('stuffRate');
        // expect(instance.stuffRate).to.be(expectedValueLiteral);
      });

      it('should have the property lineYards (base name: "lineYards")', function() {
        // TODO: update the code to test the property lineYards
        expect(instance).to.have.property('lineYards');
        // expect(instance.lineYards).to.be(expectedValueLiteral);
      });

      it('should have the property lineYardsAverage (base name: "lineYardsAverage")', function() {
        // TODO: update the code to test the property lineYardsAverage
        expect(instance).to.have.property('lineYardsAverage');
        // expect(instance.lineYardsAverage).to.be(expectedValueLiteral);
      });

      it('should have the property secondLevelYards (base name: "secondLevelYards")', function() {
        // TODO: update the code to test the property secondLevelYards
        expect(instance).to.have.property('secondLevelYards');
        // expect(instance.secondLevelYards).to.be(expectedValueLiteral);
      });

      it('should have the property secondLevelYardsAverage (base name: "secondLevelYardsAverage")', function() {
        // TODO: update the code to test the property secondLevelYardsAverage
        expect(instance).to.have.property('secondLevelYardsAverage');
        // expect(instance.secondLevelYardsAverage).to.be(expectedValueLiteral);
      });

      it('should have the property openFieldYards (base name: "openFieldYards")', function() {
        // TODO: update the code to test the property openFieldYards
        expect(instance).to.have.property('openFieldYards');
        // expect(instance.openFieldYards).to.be(expectedValueLiteral);
      });

      it('should have the property openFieldYardsAverage (base name: "openFieldYardsAverage")', function() {
        // TODO: update the code to test the property openFieldYardsAverage
        expect(instance).to.have.property('openFieldYardsAverage');
        // expect(instance.openFieldYardsAverage).to.be(expectedValueLiteral);
      });

    });
  });

}));
