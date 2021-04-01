/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 3.0.0
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
    describe('TeamSeason', function() {
      beforeEach(function() {
        instance = new cfb.TeamSeason();
      });

      it('should create an instance of TeamSeason', function() {
        // TODO: update the code to test TeamSeason
        expect(instance).to.be.a(cfb.TeamSeason);
      });

      it('should have the property school (base name: "school")', function() {
        // TODO: update the code to test the property school
        expect(instance).to.have.property('school');
        // expect(instance.school).to.be(expectedValueLiteral);
      });

      it('should have the property year (base name: "year")', function() {
        // TODO: update the code to test the property year
        expect(instance).to.have.property('year');
        // expect(instance.year).to.be(expectedValueLiteral);
      });

      it('should have the property games (base name: "games")', function() {
        // TODO: update the code to test the property games
        expect(instance).to.have.property('games');
        // expect(instance.games).to.be(expectedValueLiteral);
      });

      it('should have the property wins (base name: "wins")', function() {
        // TODO: update the code to test the property wins
        expect(instance).to.have.property('wins');
        // expect(instance.wins).to.be(expectedValueLiteral);
      });

      it('should have the property losses (base name: "losses")', function() {
        // TODO: update the code to test the property losses
        expect(instance).to.have.property('losses');
        // expect(instance.losses).to.be(expectedValueLiteral);
      });

      it('should have the property ties (base name: "ties")', function() {
        // TODO: update the code to test the property ties
        expect(instance).to.have.property('ties');
        // expect(instance.ties).to.be(expectedValueLiteral);
      });

      it('should have the property preseasonRank (base name: "preseason_rank")', function() {
        // TODO: update the code to test the property preseasonRank
        expect(instance).to.have.property('preseasonRank');
        // expect(instance.preseasonRank).to.be(expectedValueLiteral);
      });

      it('should have the property postseasonRank (base name: "postseason_rank")', function() {
        // TODO: update the code to test the property postseasonRank
        expect(instance).to.have.property('postseasonRank');
        // expect(instance.postseasonRank).to.be(expectedValueLiteral);
      });

      it('should have the property srs (base name: "srs")', function() {
        // TODO: update the code to test the property srs
        expect(instance).to.have.property('srs');
        // expect(instance.srs).to.be(expectedValueLiteral);
      });

      it('should have the property spOverall (base name: "sp_overall")', function() {
        // TODO: update the code to test the property spOverall
        expect(instance).to.have.property('spOverall');
        // expect(instance.spOverall).to.be(expectedValueLiteral);
      });

      it('should have the property spOffense (base name: "sp_offense")', function() {
        // TODO: update the code to test the property spOffense
        expect(instance).to.have.property('spOffense');
        // expect(instance.spOffense).to.be(expectedValueLiteral);
      });

      it('should have the property spDefense (base name: "sp_defense")', function() {
        // TODO: update the code to test the property spDefense
        expect(instance).to.have.property('spDefense');
        // expect(instance.spDefense).to.be(expectedValueLiteral);
      });

    });
  });

}));
