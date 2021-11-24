/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.3.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.24
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
    describe('Drive', function() {
      beforeEach(function() {
        instance = new cfb.Drive();
      });

      it('should create an instance of Drive', function() {
        // TODO: update the code to test Drive
        expect(instance).to.be.a(cfb.Drive);
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

      it('should have the property defense (base name: "defense")', function() {
        // TODO: update the code to test the property defense
        expect(instance).to.have.property('defense');
        // expect(instance.defense).to.be(expectedValueLiteral);
      });

      it('should have the property defenseConference (base name: "defense_conference")', function() {
        // TODO: update the code to test the property defenseConference
        expect(instance).to.have.property('defenseConference');
        // expect(instance.defenseConference).to.be(expectedValueLiteral);
      });

      it('should have the property gameId (base name: "game_id")', function() {
        // TODO: update the code to test the property gameId
        expect(instance).to.have.property('gameId');
        // expect(instance.gameId).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property driveNumber (base name: "drive_number")', function() {
        // TODO: update the code to test the property driveNumber
        expect(instance).to.have.property('driveNumber');
        // expect(instance.driveNumber).to.be(expectedValueLiteral);
      });

      it('should have the property scoring (base name: "scoring")', function() {
        // TODO: update the code to test the property scoring
        expect(instance).to.have.property('scoring');
        // expect(instance.scoring).to.be(expectedValueLiteral);
      });

      it('should have the property startPeriod (base name: "start_period")', function() {
        // TODO: update the code to test the property startPeriod
        expect(instance).to.have.property('startPeriod');
        // expect(instance.startPeriod).to.be(expectedValueLiteral);
      });

      it('should have the property startYardline (base name: "start_yardline")', function() {
        // TODO: update the code to test the property startYardline
        expect(instance).to.have.property('startYardline');
        // expect(instance.startYardline).to.be(expectedValueLiteral);
      });

      it('should have the property startYardsToGoal (base name: "start_yards_to_goal")', function() {
        // TODO: update the code to test the property startYardsToGoal
        expect(instance).to.have.property('startYardsToGoal');
        // expect(instance.startYardsToGoal).to.be(expectedValueLiteral);
      });

      it('should have the property startTime (base name: "start_time")', function() {
        // TODO: update the code to test the property startTime
        expect(instance).to.have.property('startTime');
        // expect(instance.startTime).to.be(expectedValueLiteral);
      });

      it('should have the property endPeriod (base name: "end_period")', function() {
        // TODO: update the code to test the property endPeriod
        expect(instance).to.have.property('endPeriod');
        // expect(instance.endPeriod).to.be(expectedValueLiteral);
      });

      it('should have the property endYardline (base name: "end_yardline")', function() {
        // TODO: update the code to test the property endYardline
        expect(instance).to.have.property('endYardline');
        // expect(instance.endYardline).to.be(expectedValueLiteral);
      });

      it('should have the property endYardsToGoal (base name: "end_yards_to_goal")', function() {
        // TODO: update the code to test the property endYardsToGoal
        expect(instance).to.have.property('endYardsToGoal');
        // expect(instance.endYardsToGoal).to.be(expectedValueLiteral);
      });

      it('should have the property endTime (base name: "end_time")', function() {
        // TODO: update the code to test the property endTime
        expect(instance).to.have.property('endTime');
        // expect(instance.endTime).to.be(expectedValueLiteral);
      });

      it('should have the property plays (base name: "plays")', function() {
        // TODO: update the code to test the property plays
        expect(instance).to.have.property('plays');
        // expect(instance.plays).to.be(expectedValueLiteral);
      });

      it('should have the property yards (base name: "yards")', function() {
        // TODO: update the code to test the property yards
        expect(instance).to.have.property('yards');
        // expect(instance.yards).to.be(expectedValueLiteral);
      });

      it('should have the property driveResult (base name: "drive_result")', function() {
        // TODO: update the code to test the property driveResult
        expect(instance).to.have.property('driveResult');
        // expect(instance.driveResult).to.be(expectedValueLiteral);
      });

      it('should have the property isHomeOffense (base name: "is_home_offense")', function() {
        // TODO: update the code to test the property isHomeOffense
        expect(instance).to.have.property('isHomeOffense');
        // expect(instance.isHomeOffense).to.be(expectedValueLiteral);
      });

      it('should have the property startOffenseScore (base name: "start_offense_score")', function() {
        // TODO: update the code to test the property startOffenseScore
        expect(instance).to.have.property('startOffenseScore');
        // expect(instance.startOffenseScore).to.be(expectedValueLiteral);
      });

      it('should have the property startDefenseScore (base name: "start_defense_score")', function() {
        // TODO: update the code to test the property startDefenseScore
        expect(instance).to.have.property('startDefenseScore');
        // expect(instance.startDefenseScore).to.be(expectedValueLiteral);
      });

      it('should have the property endOffenseScore (base name: "end_offense_score")', function() {
        // TODO: update the code to test the property endOffenseScore
        expect(instance).to.have.property('endOffenseScore');
        // expect(instance.endOffenseScore).to.be(expectedValueLiteral);
      });

      it('should have the property endDefenseScore (base name: "end_defense_score")', function() {
        // TODO: update the code to test the property endDefenseScore
        expect(instance).to.have.property('endDefenseScore');
        // expect(instance.endDefenseScore).to.be(expectedValueLiteral);
      });

    });
  });

}));
