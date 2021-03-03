/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.4.2
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
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
    describe('Game', function() {
      beforeEach(function() {
        instance = new cfb.Game();
      });

      it('should create an instance of Game', function() {
        // TODO: update the code to test Game
        expect(instance).to.be.a(cfb.Game);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
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

      it('should have the property seasonType (base name: "season_type")', function() {
        // TODO: update the code to test the property seasonType
        expect(instance).to.have.property('seasonType');
        // expect(instance.seasonType).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "start_date")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

      it('should have the property startTimeTbd (base name: "start_time_tbd")', function() {
        // TODO: update the code to test the property startTimeTbd
        expect(instance).to.have.property('startTimeTbd');
        // expect(instance.startTimeTbd).to.be(expectedValueLiteral);
      });

      it('should have the property neutralSite (base name: "neutral_site")', function() {
        // TODO: update the code to test the property neutralSite
        expect(instance).to.have.property('neutralSite');
        // expect(instance.neutralSite).to.be(expectedValueLiteral);
      });

      it('should have the property conferenceGame (base name: "conference_game")', function() {
        // TODO: update the code to test the property conferenceGame
        expect(instance).to.have.property('conferenceGame');
        // expect(instance.conferenceGame).to.be(expectedValueLiteral);
      });

      it('should have the property attendance (base name: "attendance")', function() {
        // TODO: update the code to test the property attendance
        expect(instance).to.have.property('attendance');
        // expect(instance.attendance).to.be(expectedValueLiteral);
      });

      it('should have the property venueId (base name: "venue_id")', function() {
        // TODO: update the code to test the property venueId
        expect(instance).to.have.property('venueId');
        // expect(instance.venueId).to.be(expectedValueLiteral);
      });

      it('should have the property venue (base name: "venue")', function() {
        // TODO: update the code to test the property venue
        expect(instance).to.have.property('venue');
        // expect(instance.venue).to.be(expectedValueLiteral);
      });

      it('should have the property homeId (base name: "home_id")', function() {
        // TODO: update the code to test the property homeId
        expect(instance).to.have.property('homeId');
        // expect(instance.homeId).to.be(expectedValueLiteral);
      });

      it('should have the property homeTeam (base name: "home_team")', function() {
        // TODO: update the code to test the property homeTeam
        expect(instance).to.have.property('homeTeam');
        // expect(instance.homeTeam).to.be(expectedValueLiteral);
      });

      it('should have the property homeConference (base name: "home_conference")', function() {
        // TODO: update the code to test the property homeConference
        expect(instance).to.have.property('homeConference');
        // expect(instance.homeConference).to.be(expectedValueLiteral);
      });

      it('should have the property homePoints (base name: "home_points")', function() {
        // TODO: update the code to test the property homePoints
        expect(instance).to.have.property('homePoints');
        // expect(instance.homePoints).to.be(expectedValueLiteral);
      });

      it('should have the property homeLineScores (base name: "home_line_scores")', function() {
        // TODO: update the code to test the property homeLineScores
        expect(instance).to.have.property('homeLineScores');
        // expect(instance.homeLineScores).to.be(expectedValueLiteral);
      });

      it('should have the property homePostWinProb (base name: "home_post_win_prob")', function() {
        // TODO: update the code to test the property homePostWinProb
        expect(instance).to.have.property('homePostWinProb');
        // expect(instance.homePostWinProb).to.be(expectedValueLiteral);
      });

      it('should have the property awayId (base name: "away_id")', function() {
        // TODO: update the code to test the property awayId
        expect(instance).to.have.property('awayId');
        // expect(instance.awayId).to.be(expectedValueLiteral);
      });

      it('should have the property awayTeam (base name: "away_team")', function() {
        // TODO: update the code to test the property awayTeam
        expect(instance).to.have.property('awayTeam');
        // expect(instance.awayTeam).to.be(expectedValueLiteral);
      });

      it('should have the property awayConference (base name: "away_conference")', function() {
        // TODO: update the code to test the property awayConference
        expect(instance).to.have.property('awayConference');
        // expect(instance.awayConference).to.be(expectedValueLiteral);
      });

      it('should have the property awayPoints (base name: "away_points")', function() {
        // TODO: update the code to test the property awayPoints
        expect(instance).to.have.property('awayPoints');
        // expect(instance.awayPoints).to.be(expectedValueLiteral);
      });

      it('should have the property awayLineScores (base name: "away_line_scores")', function() {
        // TODO: update the code to test the property awayLineScores
        expect(instance).to.have.property('awayLineScores');
        // expect(instance.awayLineScores).to.be(expectedValueLiteral);
      });

      it('should have the property awayPostWinProb (base name: "away_post_win_prob")', function() {
        // TODO: update the code to test the property awayPostWinProb
        expect(instance).to.have.property('awayPostWinProb');
        // expect(instance.awayPostWinProb).to.be(expectedValueLiteral);
      });

      it('should have the property excitementIndex (base name: "excitement_index")', function() {
        // TODO: update the code to test the property excitementIndex
        expect(instance).to.have.property('excitementIndex');
        // expect(instance.excitementIndex).to.be(expectedValueLiteral);
      });

    });
  });

}));
