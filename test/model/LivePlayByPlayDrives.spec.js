/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.6.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
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
    describe('LivePlayByPlayDrives', function() {
      beforeEach(function() {
        instance = new cfb.LivePlayByPlayDrives();
      });

      it('should create an instance of LivePlayByPlayDrives', function() {
        // TODO: update the code to test LivePlayByPlayDrives
        expect(instance).to.be.a(cfb.LivePlayByPlayDrives);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property offenseId (base name: "offenseId")', function() {
        // TODO: update the code to test the property offenseId
        expect(instance).to.have.property('offenseId');
        // expect(instance.offenseId).to.be(expectedValueLiteral);
      });

      it('should have the property offense (base name: "offense")', function() {
        // TODO: update the code to test the property offense
        expect(instance).to.have.property('offense');
        // expect(instance.offense).to.be(expectedValueLiteral);
      });

      it('should have the property defenseId (base name: "defenseId")', function() {
        // TODO: update the code to test the property defenseId
        expect(instance).to.have.property('defenseId');
        // expect(instance.defenseId).to.be(expectedValueLiteral);
      });

      it('should have the property defense (base name: "defense")', function() {
        // TODO: update the code to test the property defense
        expect(instance).to.have.property('defense');
        // expect(instance.defense).to.be(expectedValueLiteral);
      });

      it('should have the property playCount (base name: "playCount")', function() {
        // TODO: update the code to test the property playCount
        expect(instance).to.have.property('playCount');
        // expect(instance.playCount).to.be(expectedValueLiteral);
      });

      it('should have the property yards (base name: "yards")', function() {
        // TODO: update the code to test the property yards
        expect(instance).to.have.property('yards');
        // expect(instance.yards).to.be(expectedValueLiteral);
      });

      it('should have the property startPeriod (base name: "startPeriod")', function() {
        // TODO: update the code to test the property startPeriod
        expect(instance).to.have.property('startPeriod');
        // expect(instance.startPeriod).to.be(expectedValueLiteral);
      });

      it('should have the property startClock (base name: "startClock")', function() {
        // TODO: update the code to test the property startClock
        expect(instance).to.have.property('startClock');
        // expect(instance.startClock).to.be(expectedValueLiteral);
      });

      it('should have the property startYardsToGoal (base name: "startYardsToGoal")', function() {
        // TODO: update the code to test the property startYardsToGoal
        expect(instance).to.have.property('startYardsToGoal');
        // expect(instance.startYardsToGoal).to.be(expectedValueLiteral);
      });

      it('should have the property endPeriod (base name: "endPeriod")', function() {
        // TODO: update the code to test the property endPeriod
        expect(instance).to.have.property('endPeriod');
        // expect(instance.endPeriod).to.be(expectedValueLiteral);
      });

      it('should have the property endClock (base name: "endClock")', function() {
        // TODO: update the code to test the property endClock
        expect(instance).to.have.property('endClock');
        // expect(instance.endClock).to.be(expectedValueLiteral);
      });

      it('should have the property endYardsToGoal (base name: "endYardsToGoal")', function() {
        // TODO: update the code to test the property endYardsToGoal
        expect(instance).to.have.property('endYardsToGoal');
        // expect(instance.endYardsToGoal).to.be(expectedValueLiteral);
      });

      it('should have the property duration (base name: "duration")', function() {
        // TODO: update the code to test the property duration
        expect(instance).to.have.property('duration');
        // expect(instance.duration).to.be(expectedValueLiteral);
      });

      it('should have the property scoringOpportunity (base name: "scoringOpportunity")', function() {
        // TODO: update the code to test the property scoringOpportunity
        expect(instance).to.have.property('scoringOpportunity');
        // expect(instance.scoringOpportunity).to.be(expectedValueLiteral);
      });

      it('should have the property plays (base name: "plays")', function() {
        // TODO: update the code to test the property plays
        expect(instance).to.have.property('plays');
        // expect(instance.plays).to.be(expectedValueLiteral);
      });

    });
  });

}));
