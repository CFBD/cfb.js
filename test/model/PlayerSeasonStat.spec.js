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
    describe('PlayerSeasonStat', function() {
      beforeEach(function() {
        instance = new cfb.PlayerSeasonStat();
      });

      it('should create an instance of PlayerSeasonStat', function() {
        // TODO: update the code to test PlayerSeasonStat
        expect(instance).to.be.a(cfb.PlayerSeasonStat);
      });

      it('should have the property season (base name: "season")', function() {
        // TODO: update the code to test the property season
        expect(instance).to.have.property('season');
        // expect(instance.season).to.be(expectedValueLiteral);
      });

      it('should have the property playerId (base name: "playerId")', function() {
        // TODO: update the code to test the property playerId
        expect(instance).to.have.property('playerId');
        // expect(instance.playerId).to.be(expectedValueLiteral);
      });

      it('should have the property player (base name: "player")', function() {
        // TODO: update the code to test the property player
        expect(instance).to.have.property('player');
        // expect(instance.player).to.be(expectedValueLiteral);
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

      it('should have the property category (base name: "category")', function() {
        // TODO: update the code to test the property category
        expect(instance).to.have.property('category');
        // expect(instance.category).to.be(expectedValueLiteral);
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
