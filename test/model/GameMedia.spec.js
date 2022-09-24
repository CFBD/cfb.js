/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.7
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
    describe('GameMedia', function() {
      beforeEach(function() {
        instance = new cfb.GameMedia();
      });

      it('should create an instance of GameMedia', function() {
        // TODO: update the code to test GameMedia
        expect(instance).to.be.a(cfb.GameMedia);
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

      it('should have the property startTime (base name: "startTime")', function() {
        // TODO: update the code to test the property startTime
        expect(instance).to.have.property('startTime');
        // expect(instance.startTime).to.be(expectedValueLiteral);
      });

      it('should have the property isStartTimeTBD (base name: "isStartTimeTBD")', function() {
        // TODO: update the code to test the property isStartTimeTBD
        expect(instance).to.have.property('isStartTimeTBD');
        // expect(instance.isStartTimeTBD).to.be(expectedValueLiteral);
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

      it('should have the property mediaType (base name: "mediaType")', function() {
        // TODO: update the code to test the property mediaType
        expect(instance).to.have.property('mediaType');
        // expect(instance.mediaType).to.be(expectedValueLiteral);
      });

      it('should have the property outlet (base name: "outlet")', function() {
        // TODO: update the code to test the property outlet
        expect(instance).to.have.property('outlet');
        // expect(instance.outlet).to.be(expectedValueLiteral);
      });

    });
  });

}));
