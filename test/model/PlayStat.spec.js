/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.1.3
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
    describe('PlayStat', function() {
      beforeEach(function() {
        instance = new cfb.PlayStat();
      });

      it('should create an instance of PlayStat', function() {
        // TODO: update the code to test PlayStat
        expect(instance).to.be.a(cfb.PlayStat);
      });

      it('should have the property gameId (base name: "gameId")', function() {
        // TODO: update the code to test the property gameId
        expect(instance).to.have.property('gameId');
        // expect(instance.gameId).to.be(expectedValueLiteral);
      });

      it('should have the property season (base name: "season")', function() {
        // TODO: update the code to test the property season
        expect(instance).to.have.property('season');
        // expect(instance.season).to.be(expectedValueLiteral);
      });

      it('should have the property week (base name: "week")', function() {
        // TODO: update the code to test the property week
        expect(instance).to.have.property('week');
        // expect(instance.week).to.be(expectedValueLiteral);
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

      it('should have the property opponent (base name: "opponent")', function() {
        // TODO: update the code to test the property opponent
        expect(instance).to.have.property('opponent');
        // expect(instance.opponent).to.be(expectedValueLiteral);
      });

      it('should have the property teamScore (base name: "teamScore")', function() {
        // TODO: update the code to test the property teamScore
        expect(instance).to.have.property('teamScore');
        // expect(instance.teamScore).to.be(expectedValueLiteral);
      });

      it('should have the property opponentScore (base name: "opponentScore")', function() {
        // TODO: update the code to test the property opponentScore
        expect(instance).to.have.property('opponentScore');
        // expect(instance.opponentScore).to.be(expectedValueLiteral);
      });

      it('should have the property driveId (base name: "driveId")', function() {
        // TODO: update the code to test the property driveId
        expect(instance).to.have.property('driveId');
        // expect(instance.driveId).to.be(expectedValueLiteral);
      });

      it('should have the property playId (base name: "playId")', function() {
        // TODO: update the code to test the property playId
        expect(instance).to.have.property('playId');
        // expect(instance.playId).to.be(expectedValueLiteral);
      });

      it('should have the property period (base name: "period")', function() {
        // TODO: update the code to test the property period
        expect(instance).to.have.property('period');
        // expect(instance.period).to.be(expectedValueLiteral);
      });

      it('should have the property clock (base name: "clock")', function() {
        // TODO: update the code to test the property clock
        expect(instance).to.have.property('clock');
        // expect(instance.clock).to.be(expectedValueLiteral);
      });

      it('should have the property yardsToGoal (base name: "yardsToGoal")', function() {
        // TODO: update the code to test the property yardsToGoal
        expect(instance).to.have.property('yardsToGoal');
        // expect(instance.yardsToGoal).to.be(expectedValueLiteral);
      });

      it('should have the property down (base name: "down")', function() {
        // TODO: update the code to test the property down
        expect(instance).to.have.property('down');
        // expect(instance.down).to.be(expectedValueLiteral);
      });

      it('should have the property distance (base name: "distance")', function() {
        // TODO: update the code to test the property distance
        expect(instance).to.have.property('distance');
        // expect(instance.distance).to.be(expectedValueLiteral);
      });

      it('should have the property athleteId (base name: "athleteId")', function() {
        // TODO: update the code to test the property athleteId
        expect(instance).to.have.property('athleteId');
        // expect(instance.athleteId).to.be(expectedValueLiteral);
      });

      it('should have the property athleteName (base name: "athleteName")', function() {
        // TODO: update the code to test the property athleteName
        expect(instance).to.have.property('athleteName');
        // expect(instance.athleteName).to.be(expectedValueLiteral);
      });

      it('should have the property statType (base name: "statType")', function() {
        // TODO: update the code to test the property statType
        expect(instance).to.have.property('statType');
        // expect(instance.statType).to.be(expectedValueLiteral);
      });

      it('should have the property stat (base name: "stat")', function() {
        // TODO: update the code to test the property stat
        expect(instance).to.have.property('stat');
        // expect(instance.stat).to.be(expectedValueLiteral);
      });

    });
  });

}));
