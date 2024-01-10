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
 * Swagger Codegen version: 2.4.39
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
    describe('ScoreboardGame', function() {
      beforeEach(function() {
        instance = new cfb.ScoreboardGame();
      });

      it('should create an instance of ScoreboardGame', function() {
        // TODO: update the code to test ScoreboardGame
        expect(instance).to.be.a(cfb.ScoreboardGame);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "startDate")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

      it('should have the property startTimeTBD (base name: "startTimeTBD")', function() {
        // TODO: update the code to test the property startTimeTBD
        expect(instance).to.have.property('startTimeTBD');
        // expect(instance.startTimeTBD).to.be(expectedValueLiteral);
      });

      it('should have the property tv (base name: "tv")', function() {
        // TODO: update the code to test the property tv
        expect(instance).to.have.property('tv');
        // expect(instance.tv).to.be(expectedValueLiteral);
      });

      it('should have the property neutralSite (base name: "neutralSite")', function() {
        // TODO: update the code to test the property neutralSite
        expect(instance).to.have.property('neutralSite');
        // expect(instance.neutralSite).to.be(expectedValueLiteral);
      });

      it('should have the property conferenceGame (base name: "conferenceGame")', function() {
        // TODO: update the code to test the property conferenceGame
        expect(instance).to.have.property('conferenceGame');
        // expect(instance.conferenceGame).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
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

      it('should have the property situation (base name: "situation")', function() {
        // TODO: update the code to test the property situation
        expect(instance).to.have.property('situation');
        // expect(instance.situation).to.be(expectedValueLiteral);
      });

      it('should have the property possession (base name: "possession")', function() {
        // TODO: update the code to test the property possession
        expect(instance).to.have.property('possession');
        // expect(instance.possession).to.be(expectedValueLiteral);
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

      it('should have the property awayTeam (base name: "awayTeam")', function() {
        // TODO: update the code to test the property awayTeam
        expect(instance).to.have.property('awayTeam');
        // expect(instance.awayTeam).to.be(expectedValueLiteral);
      });

      it('should have the property weather (base name: "weather")', function() {
        // TODO: update the code to test the property weather
        expect(instance).to.have.property('weather');
        // expect(instance.weather).to.be(expectedValueLiteral);
      });

      it('should have the property betting (base name: "betting")', function() {
        // TODO: update the code to test the property betting
        expect(instance).to.have.property('betting');
        // expect(instance.betting).to.be(expectedValueLiteral);
      });

    });
  });

}));
