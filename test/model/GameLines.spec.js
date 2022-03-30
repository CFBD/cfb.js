/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.3.2
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.26
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
    describe('GameLines', function() {
      beforeEach(function() {
        instance = new cfb.GameLines();
      });

      it('should create an instance of GameLines', function() {
        // TODO: update the code to test GameLines
        expect(instance).to.be.a(cfb.GameLines);
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

      it('should have the property seasonType (base name: "seasonType")', function() {
        // TODO: update the code to test the property seasonType
        expect(instance).to.have.property('seasonType');
        // expect(instance.seasonType).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "startDate")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

      it('should have the property homeTeam (base name: "homeTeam")', function() {
        // TODO: update the code to test the property homeTeam
        expect(instance).to.have.property('homeTeam');
        // expect(instance.homeTeam).to.be(expectedValueLiteral);
      });

      it('should have the property homeConference (base name: "homeConference")', function() {
        // TODO: update the code to test the property homeConference
        expect(instance).to.have.property('homeConference');
        // expect(instance.homeConference).to.be(expectedValueLiteral);
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

      it('should have the property awayConference (base name: "awayConference")', function() {
        // TODO: update the code to test the property awayConference
        expect(instance).to.have.property('awayConference');
        // expect(instance.awayConference).to.be(expectedValueLiteral);
      });

      it('should have the property awayScore (base name: "awayScore")', function() {
        // TODO: update the code to test the property awayScore
        expect(instance).to.have.property('awayScore');
        // expect(instance.awayScore).to.be(expectedValueLiteral);
      });

      it('should have the property lines (base name: "lines")', function() {
        // TODO: update the code to test the property lines
        expect(instance).to.have.property('lines');
        // expect(instance.lines).to.be(expectedValueLiteral);
      });

    });
  });

}));
