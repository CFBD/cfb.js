/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.27.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
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
    describe('TeamMatchupGames', function() {
      beforeEach(function() {
        instance = new cfb.TeamMatchupGames();
      });

      it('should create an instance of TeamMatchupGames', function() {
        // TODO: update the code to test TeamMatchupGames
        expect(instance).to.be.a(cfb.TeamMatchupGames);
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

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property neutralSite (base name: "neutralSite")', function() {
        // TODO: update the code to test the property neutralSite
        expect(instance).to.have.property('neutralSite');
        // expect(instance.neutralSite).to.be(expectedValueLiteral);
      });

      it('should have the property venue (base name: "venue")', function() {
        // TODO: update the code to test the property venue
        expect(instance).to.have.property('venue');
        // expect(instance.venue).to.be(expectedValueLiteral);
      });

      it('should have the property homeTeam (base name: "homeTeam")', function() {
        // TODO: update the code to test the property homeTeam
        expect(instance).to.have.property('homeTeam');
        // expect(instance.homeTeam).to.be(expectedValueLiteral);
      });

      it('should have the property homeScore (base name: "homeScore")', function() {
        // TODO: update the code to test the property homeScore
        expect(instance).to.have.property('homeScore');
        // expect(instance.homeScore).to.be(expectedValueLiteral);
      });

      it('should have the property awayTeam (base name: "awayTeam")', function() {
        // TODO: update the code to test the property awayTeam
        expect(instance).to.have.property('awayTeam');
        // expect(instance.awayTeam).to.be(expectedValueLiteral);
      });

      it('should have the property awayScore (base name: "awayScore")', function() {
        // TODO: update the code to test the property awayScore
        expect(instance).to.have.property('awayScore');
        // expect(instance.awayScore).to.be(expectedValueLiteral);
      });

      it('should have the property winner (base name: "winner")', function() {
        // TODO: update the code to test the property winner
        expect(instance).to.have.property('winner');
        // expect(instance.winner).to.be(expectedValueLiteral);
      });

    });
  });

}));
