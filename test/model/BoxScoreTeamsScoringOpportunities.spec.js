/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.6
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
    describe('BoxScoreTeamsScoringOpportunities', function() {
      beforeEach(function() {
        instance = new cfb.BoxScoreTeamsScoringOpportunities();
      });

      it('should create an instance of BoxScoreTeamsScoringOpportunities', function() {
        // TODO: update the code to test BoxScoreTeamsScoringOpportunities
        expect(instance).to.be.a(cfb.BoxScoreTeamsScoringOpportunities);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property opportunities (base name: "opportunities")', function() {
        // TODO: update the code to test the property opportunities
        expect(instance).to.have.property('opportunities');
        // expect(instance.opportunities).to.be(expectedValueLiteral);
      });

      it('should have the property points (base name: "points")', function() {
        // TODO: update the code to test the property points
        expect(instance).to.have.property('points');
        // expect(instance.points).to.be(expectedValueLiteral);
      });

      it('should have the property pointsPerOpportunity (base name: "pointsPerOpportunity")', function() {
        // TODO: update the code to test the property pointsPerOpportunity
        expect(instance).to.have.property('pointsPerOpportunity');
        // expect(instance.pointsPerOpportunity).to.be(expectedValueLiteral);
      });

    });
  });

}));
