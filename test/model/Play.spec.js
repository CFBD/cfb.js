/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.8
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
    describe('Play', function() {
      beforeEach(function() {
        instance = new cfb.Play();
      });

      it('should create an instance of Play', function() {
        // TODO: update the code to test Play
        expect(instance).to.be.a(cfb.Play);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property driveId (base name: "drive_id")', function() {
        // TODO: update the code to test the property driveId
        expect(instance).to.have.property('driveId');
        // expect(instance.driveId).to.be(expectedValueLiteral);
      });

      it('should have the property gameId (base name: "game_id")', function() {
        // TODO: update the code to test the property gameId
        expect(instance).to.have.property('gameId');
        // expect(instance.gameId).to.be(expectedValueLiteral);
      });

      it('should have the property driveNumber (base name: "drive_number")', function() {
        // TODO: update the code to test the property driveNumber
        expect(instance).to.have.property('driveNumber');
        // expect(instance.driveNumber).to.be(expectedValueLiteral);
      });

      it('should have the property playNumber (base name: "play_number")', function() {
        // TODO: update the code to test the property playNumber
        expect(instance).to.have.property('playNumber');
        // expect(instance.playNumber).to.be(expectedValueLiteral);
      });

      it('should have the property offense (base name: "offense")', function() {
        // TODO: update the code to test the property offense
        expect(instance).to.have.property('offense');
        // expect(instance.offense).to.be(expectedValueLiteral);
      });

      it('should have the property offenseConference (base name: "offense_conference")', function() {
        // TODO: update the code to test the property offenseConference
        expect(instance).to.have.property('offenseConference');
        // expect(instance.offenseConference).to.be(expectedValueLiteral);
      });

      it('should have the property offenseScore (base name: "offense_score")', function() {
        // TODO: update the code to test the property offenseScore
        expect(instance).to.have.property('offenseScore');
        // expect(instance.offenseScore).to.be(expectedValueLiteral);
      });

      it('should have the property defense (base name: "defense")', function() {
        // TODO: update the code to test the property defense
        expect(instance).to.have.property('defense');
        // expect(instance.defense).to.be(expectedValueLiteral);
      });

      it('should have the property home (base name: "home")', function() {
        // TODO: update the code to test the property home
        expect(instance).to.have.property('home');
        // expect(instance.home).to.be(expectedValueLiteral);
      });

      it('should have the property away (base name: "away")', function() {
        // TODO: update the code to test the property away
        expect(instance).to.have.property('away');
        // expect(instance.away).to.be(expectedValueLiteral);
      });

      it('should have the property defenseConference (base name: "defense_conference")', function() {
        // TODO: update the code to test the property defenseConference
        expect(instance).to.have.property('defenseConference');
        // expect(instance.defenseConference).to.be(expectedValueLiteral);
      });

      it('should have the property defenseScore (base name: "defense_score")', function() {
        // TODO: update the code to test the property defenseScore
        expect(instance).to.have.property('defenseScore');
        // expect(instance.defenseScore).to.be(expectedValueLiteral);
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

      it('should have the property offenseTimeouts (base name: "offense_timeouts")', function() {
        // TODO: update the code to test the property offenseTimeouts
        expect(instance).to.have.property('offenseTimeouts');
        // expect(instance.offenseTimeouts).to.be(expectedValueLiteral);
      });

      it('should have the property defenseTimeouts (base name: "defense_timeouts")', function() {
        // TODO: update the code to test the property defenseTimeouts
        expect(instance).to.have.property('defenseTimeouts');
        // expect(instance.defenseTimeouts).to.be(expectedValueLiteral);
      });

      it('should have the property yardLine (base name: "yard_line")', function() {
        // TODO: update the code to test the property yardLine
        expect(instance).to.have.property('yardLine');
        // expect(instance.yardLine).to.be(expectedValueLiteral);
      });

      it('should have the property yardsToGoal (base name: "yards_to_goal")', function() {
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

      it('should have the property yardsGained (base name: "yards_gained")', function() {
        // TODO: update the code to test the property yardsGained
        expect(instance).to.have.property('yardsGained');
        // expect(instance.yardsGained).to.be(expectedValueLiteral);
      });

      it('should have the property scoring (base name: "scoring")', function() {
        // TODO: update the code to test the property scoring
        expect(instance).to.have.property('scoring');
        // expect(instance.scoring).to.be(expectedValueLiteral);
      });

      it('should have the property playType (base name: "play_type")', function() {
        // TODO: update the code to test the property playType
        expect(instance).to.have.property('playType');
        // expect(instance.playType).to.be(expectedValueLiteral);
      });

      it('should have the property playText (base name: "play_text")', function() {
        // TODO: update the code to test the property playText
        expect(instance).to.have.property('playText');
        // expect(instance.playText).to.be(expectedValueLiteral);
      });

      it('should have the property ppa (base name: "ppa")', function() {
        // TODO: update the code to test the property ppa
        expect(instance).to.have.property('ppa');
        // expect(instance.ppa).to.be(expectedValueLiteral);
      });

      it('should have the property wallclock (base name: "wallclock")', function() {
        // TODO: update the code to test the property wallclock
        expect(instance).to.have.property('wallclock');
        // expect(instance.wallclock).to.be(expectedValueLiteral);
      });

    });
  });

}));
