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
    describe('LivePlayByPlayTeams', function() {
      beforeEach(function() {
        instance = new cfb.LivePlayByPlayTeams();
      });

      it('should create an instance of LivePlayByPlayTeams', function() {
        // TODO: update the code to test LivePlayByPlayTeams
        expect(instance).to.be.a(cfb.LivePlayByPlayTeams);
      });

      it('should have the property teamId (base name: "teamId")', function() {
        // TODO: update the code to test the property teamId
        expect(instance).to.have.property('teamId');
        // expect(instance.teamId).to.be(expectedValueLiteral);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property homeAway (base name: "homeAway")', function() {
        // TODO: update the code to test the property homeAway
        expect(instance).to.have.property('homeAway');
        // expect(instance.homeAway).to.be(expectedValueLiteral);
      });

      it('should have the property points (base name: "points")', function() {
        // TODO: update the code to test the property points
        expect(instance).to.have.property('points');
        // expect(instance.points).to.be(expectedValueLiteral);
      });

      it('should have the property drives (base name: "drives")', function() {
        // TODO: update the code to test the property drives
        expect(instance).to.have.property('drives');
        // expect(instance.drives).to.be(expectedValueLiteral);
      });

      it('should have the property scoringOpportunities (base name: "scoringOpportunities")', function() {
        // TODO: update the code to test the property scoringOpportunities
        expect(instance).to.have.property('scoringOpportunities');
        // expect(instance.scoringOpportunities).to.be(expectedValueLiteral);
      });

      it('should have the property pointsPerOpportunity (base name: "pointsPerOpportunity")', function() {
        // TODO: update the code to test the property pointsPerOpportunity
        expect(instance).to.have.property('pointsPerOpportunity');
        // expect(instance.pointsPerOpportunity).to.be(expectedValueLiteral);
      });

      it('should have the property plays (base name: "plays")', function() {
        // TODO: update the code to test the property plays
        expect(instance).to.have.property('plays');
        // expect(instance.plays).to.be(expectedValueLiteral);
      });

      it('should have the property lineYards (base name: "lineYards")', function() {
        // TODO: update the code to test the property lineYards
        expect(instance).to.have.property('lineYards');
        // expect(instance.lineYards).to.be(expectedValueLiteral);
      });

      it('should have the property lineYardsPerRush (base name: "lineYardsPerRush")', function() {
        // TODO: update the code to test the property lineYardsPerRush
        expect(instance).to.have.property('lineYardsPerRush');
        // expect(instance.lineYardsPerRush).to.be(expectedValueLiteral);
      });

      it('should have the property secondLevelYards (base name: "secondLevelYards")', function() {
        // TODO: update the code to test the property secondLevelYards
        expect(instance).to.have.property('secondLevelYards');
        // expect(instance.secondLevelYards).to.be(expectedValueLiteral);
      });

      it('should have the property secondLevelYardsPerRush (base name: "secondLevelYardsPerRush")', function() {
        // TODO: update the code to test the property secondLevelYardsPerRush
        expect(instance).to.have.property('secondLevelYardsPerRush');
        // expect(instance.secondLevelYardsPerRush).to.be(expectedValueLiteral);
      });

      it('should have the property openFieldYards (base name: "openFieldYards")', function() {
        // TODO: update the code to test the property openFieldYards
        expect(instance).to.have.property('openFieldYards');
        // expect(instance.openFieldYards).to.be(expectedValueLiteral);
      });

      it('should have the property openFieldYardsPerRush (base name: "openFieldYardsPerRush")', function() {
        // TODO: update the code to test the property openFieldYardsPerRush
        expect(instance).to.have.property('openFieldYardsPerRush');
        // expect(instance.openFieldYardsPerRush).to.be(expectedValueLiteral);
      });

      it('should have the property epaPerPlay (base name: "epaPerPlay")', function() {
        // TODO: update the code to test the property epaPerPlay
        expect(instance).to.have.property('epaPerPlay');
        // expect(instance.epaPerPlay).to.be(expectedValueLiteral);
      });

      it('should have the property totalEpa (base name: "totalEpa")', function() {
        // TODO: update the code to test the property totalEpa
        expect(instance).to.have.property('totalEpa');
        // expect(instance.totalEpa).to.be(expectedValueLiteral);
      });

      it('should have the property passingEpa (base name: "passingEpa")', function() {
        // TODO: update the code to test the property passingEpa
        expect(instance).to.have.property('passingEpa');
        // expect(instance.passingEpa).to.be(expectedValueLiteral);
      });

      it('should have the property epaPerPass (base name: "epaPerPass")', function() {
        // TODO: update the code to test the property epaPerPass
        expect(instance).to.have.property('epaPerPass');
        // expect(instance.epaPerPass).to.be(expectedValueLiteral);
      });

      it('should have the property rushingEpa (base name: "rushingEpa")', function() {
        // TODO: update the code to test the property rushingEpa
        expect(instance).to.have.property('rushingEpa');
        // expect(instance.rushingEpa).to.be(expectedValueLiteral);
      });

      it('should have the property epaPerRush (base name: "epaPerRush")', function() {
        // TODO: update the code to test the property epaPerRush
        expect(instance).to.have.property('epaPerRush');
        // expect(instance.epaPerRush).to.be(expectedValueLiteral);
      });

      it('should have the property successRate (base name: "successRate")', function() {
        // TODO: update the code to test the property successRate
        expect(instance).to.have.property('successRate');
        // expect(instance.successRate).to.be(expectedValueLiteral);
      });

      it('should have the property standardDownSuccessRate (base name: "standardDownSuccessRate")', function() {
        // TODO: update the code to test the property standardDownSuccessRate
        expect(instance).to.have.property('standardDownSuccessRate');
        // expect(instance.standardDownSuccessRate).to.be(expectedValueLiteral);
      });

      it('should have the property passingDownSuccessRate (base name: "passingDownSuccessRate")', function() {
        // TODO: update the code to test the property passingDownSuccessRate
        expect(instance).to.have.property('passingDownSuccessRate');
        // expect(instance.passingDownSuccessRate).to.be(expectedValueLiteral);
      });

      it('should have the property explosiveness (base name: "explosiveness")', function() {
        // TODO: update the code to test the property explosiveness
        expect(instance).to.have.property('explosiveness');
        // expect(instance.explosiveness).to.be(expectedValueLiteral);
      });

    });
  });

}));
