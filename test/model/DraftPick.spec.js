/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.2.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.23
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
    describe('DraftPick', function() {
      beforeEach(function() {
        instance = new cfb.DraftPick();
      });

      it('should create an instance of DraftPick', function() {
        // TODO: update the code to test DraftPick
        expect(instance).to.be.a(cfb.DraftPick);
      });

      it('should have the property collegeAthleteId (base name: "collegeAthleteId")', function() {
        // TODO: update the code to test the property collegeAthleteId
        expect(instance).to.have.property('collegeAthleteId');
        // expect(instance.collegeAthleteId).to.be(expectedValueLiteral);
      });

      it('should have the property nflAthleteId (base name: "nflAthleteId")', function() {
        // TODO: update the code to test the property nflAthleteId
        expect(instance).to.have.property('nflAthleteId');
        // expect(instance.nflAthleteId).to.be(expectedValueLiteral);
      });

      it('should have the property collegeId (base name: "collegeId")', function() {
        // TODO: update the code to test the property collegeId
        expect(instance).to.have.property('collegeId');
        // expect(instance.collegeId).to.be(expectedValueLiteral);
      });

      it('should have the property collegeTeam (base name: "collegeTeam")', function() {
        // TODO: update the code to test the property collegeTeam
        expect(instance).to.have.property('collegeTeam');
        // expect(instance.collegeTeam).to.be(expectedValueLiteral);
      });

      it('should have the property collegeConference (base name: "collegeConference")', function() {
        // TODO: update the code to test the property collegeConference
        expect(instance).to.have.property('collegeConference');
        // expect(instance.collegeConference).to.be(expectedValueLiteral);
      });

      it('should have the property nflTeam (base name: "nflTeam")', function() {
        // TODO: update the code to test the property nflTeam
        expect(instance).to.have.property('nflTeam');
        // expect(instance.nflTeam).to.be(expectedValueLiteral);
      });

      it('should have the property year (base name: "year")', function() {
        // TODO: update the code to test the property year
        expect(instance).to.have.property('year');
        // expect(instance.year).to.be(expectedValueLiteral);
      });

      it('should have the property overall (base name: "overall")', function() {
        // TODO: update the code to test the property overall
        expect(instance).to.have.property('overall');
        // expect(instance.overall).to.be(expectedValueLiteral);
      });

      it('should have the property round (base name: "round")', function() {
        // TODO: update the code to test the property round
        expect(instance).to.have.property('round');
        // expect(instance.round).to.be(expectedValueLiteral);
      });

      it('should have the property pick (base name: "pick")', function() {
        // TODO: update the code to test the property pick
        expect(instance).to.have.property('pick');
        // expect(instance.pick).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property position (base name: "position")', function() {
        // TODO: update the code to test the property position
        expect(instance).to.have.property('position');
        // expect(instance.position).to.be(expectedValueLiteral);
      });

      it('should have the property height (base name: "height")', function() {
        // TODO: update the code to test the property height
        expect(instance).to.have.property('height');
        // expect(instance.height).to.be(expectedValueLiteral);
      });

      it('should have the property weight (base name: "weight")', function() {
        // TODO: update the code to test the property weight
        expect(instance).to.have.property('weight');
        // expect(instance.weight).to.be(expectedValueLiteral);
      });

      it('should have the property preDraftRanking (base name: "preDraftRanking")', function() {
        // TODO: update the code to test the property preDraftRanking
        expect(instance).to.have.property('preDraftRanking');
        // expect(instance.preDraftRanking).to.be(expectedValueLiteral);
      });

      it('should have the property preDraftPositionRanking (base name: "preDraftPositionRanking")', function() {
        // TODO: update the code to test the property preDraftPositionRanking
        expect(instance).to.have.property('preDraftPositionRanking');
        // expect(instance.preDraftPositionRanking).to.be(expectedValueLiteral);
      });

      it('should have the property preDraftGrade (base name: "preDraftGrade")', function() {
        // TODO: update the code to test the property preDraftGrade
        expect(instance).to.have.property('preDraftGrade');
        // expect(instance.preDraftGrade).to.be(expectedValueLiteral);
      });

      it('should have the property hometownInfo (base name: "hometownInfo")', function() {
        // TODO: update the code to test the property hometownInfo
        expect(instance).to.have.property('hometownInfo');
        // expect(instance.hometownInfo).to.be(expectedValueLiteral);
      });

    });
  });

}));
