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
    describe('BoxScoreTeams', function() {
      beforeEach(function() {
        instance = new cfb.BoxScoreTeams();
      });

      it('should create an instance of BoxScoreTeams', function() {
        // TODO: update the code to test BoxScoreTeams
        expect(instance).to.be.a(cfb.BoxScoreTeams);
      });

      it('should have the property ppa (base name: "ppa")', function() {
        // TODO: update the code to test the property ppa
        expect(instance).to.have.property('ppa');
        // expect(instance.ppa).to.be(expectedValueLiteral);
      });

      it('should have the property cumulativePpa (base name: "cumulativePpa")', function() {
        // TODO: update the code to test the property cumulativePpa
        expect(instance).to.have.property('cumulativePpa');
        // expect(instance.cumulativePpa).to.be(expectedValueLiteral);
      });

      it('should have the property successRates (base name: "successRates")', function() {
        // TODO: update the code to test the property successRates
        expect(instance).to.have.property('successRates');
        // expect(instance.successRates).to.be(expectedValueLiteral);
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

      it('should have the property havoc (base name: "havoc")', function() {
        // TODO: update the code to test the property havoc
        expect(instance).to.have.property('havoc');
        // expect(instance.havoc).to.be(expectedValueLiteral);
      });

      it('should have the property scoringOpportunities (base name: "scoringOpportunities")', function() {
        // TODO: update the code to test the property scoringOpportunities
        expect(instance).to.have.property('scoringOpportunities');
        // expect(instance.scoringOpportunities).to.be(expectedValueLiteral);
      });

      it('should have the property fieldPosition (base name: "fieldPosition")', function() {
        // TODO: update the code to test the property fieldPosition
        expect(instance).to.have.property('fieldPosition');
        // expect(instance.fieldPosition).to.be(expectedValueLiteral);
      });

    });
  });

}));
