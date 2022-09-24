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
    describe('PlayWP', function() {
      beforeEach(function() {
        instance = new cfb.PlayWP();
      });

      it('should create an instance of PlayWP', function() {
        // TODO: update the code to test PlayWP
        expect(instance).to.be.a(cfb.PlayWP);
      });

      it('should have the property gamesId (base name: "gamesId")', function() {
        // TODO: update the code to test the property gamesId
        expect(instance).to.have.property('gamesId');
        // expect(instance.gamesId).to.be(expectedValueLiteral);
      });

      it('should have the property playId (base name: "playId")', function() {
        // TODO: update the code to test the property playId
        expect(instance).to.have.property('playId');
        // expect(instance.playId).to.be(expectedValueLiteral);
      });

      it('should have the property playText (base name: "playText")', function() {
        // TODO: update the code to test the property playText
        expect(instance).to.have.property('playText');
        // expect(instance.playText).to.be(expectedValueLiteral);
      });

      it('should have the property homeId (base name: "homeId")', function() {
        // TODO: update the code to test the property homeId
        expect(instance).to.have.property('homeId');
        // expect(instance.homeId).to.be(expectedValueLiteral);
      });

      it('should have the property home (base name: "home")', function() {
        // TODO: update the code to test the property home
        expect(instance).to.have.property('home');
        // expect(instance.home).to.be(expectedValueLiteral);
      });

      it('should have the property awayId (base name: "awayId")', function() {
        // TODO: update the code to test the property awayId
        expect(instance).to.have.property('awayId');
        // expect(instance.awayId).to.be(expectedValueLiteral);
      });

      it('should have the property away (base name: "away")', function() {
        // TODO: update the code to test the property away
        expect(instance).to.have.property('away');
        // expect(instance.away).to.be(expectedValueLiteral);
      });

      it('should have the property spread (base name: "spread")', function() {
        // TODO: update the code to test the property spread
        expect(instance).to.have.property('spread');
        // expect(instance.spread).to.be(expectedValueLiteral);
      });

      it('should have the property homeBall (base name: "homeBall")', function() {
        // TODO: update the code to test the property homeBall
        expect(instance).to.have.property('homeBall');
        // expect(instance.homeBall).to.be(expectedValueLiteral);
      });

      it('should have the property homeScore (base name: "homeScore")', function() {
        // TODO: update the code to test the property homeScore
        expect(instance).to.have.property('homeScore');
        // expect(instance.homeScore).to.be(expectedValueLiteral);
      });

      it('should have the property awayScore (base name: "awayScore")', function() {
        // TODO: update the code to test the property awayScore
        expect(instance).to.have.property('awayScore');
        // expect(instance.awayScore).to.be(expectedValueLiteral);
      });

      it('should have the property timeRemaining (base name: "timeRemaining")', function() {
        // TODO: update the code to test the property timeRemaining
        expect(instance).to.have.property('timeRemaining');
        // expect(instance.timeRemaining).to.be(expectedValueLiteral);
      });

      it('should have the property yardLine (base name: "yardLine")', function() {
        // TODO: update the code to test the property yardLine
        expect(instance).to.have.property('yardLine');
        // expect(instance.yardLine).to.be(expectedValueLiteral);
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

      it('should have the property homeWinProb (base name: "homeWinProb")', function() {
        // TODO: update the code to test the property homeWinProb
        expect(instance).to.have.property('homeWinProb');
        // expect(instance.homeWinProb).to.be(expectedValueLiteral);
      });

      it('should have the property playNumber (base name: "playNumber")', function() {
        // TODO: update the code to test the property playNumber
        expect(instance).to.have.property('playNumber');
        // expect(instance.playNumber).to.be(expectedValueLiteral);
      });

    });
  });

}));
