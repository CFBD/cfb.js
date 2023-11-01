/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.5.1
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.33
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
    describe('LivePlayByPlayPlays', function() {
      beforeEach(function() {
        instance = new cfb.LivePlayByPlayPlays();
      });

      it('should create an instance of LivePlayByPlayPlays', function() {
        // TODO: update the code to test LivePlayByPlayPlays
        expect(instance).to.be.a(cfb.LivePlayByPlayPlays);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
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

      it('should have the property wallclock (base name: "wallclock")', function() {
        // TODO: update the code to test the property wallclock
        expect(instance).to.have.property('wallclock');
        // expect(instance.wallclock).to.be(expectedValueLiteral);
      });

      it('should have the property teamId (base name: "teamId")', function() {
        // TODO: update the code to test the property teamId
        expect(instance).to.have.property('teamId');
        // expect(instance.teamId).to.be(expectedValueLiteral);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
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

      it('should have the property yardsToGoal (base name: "yardsToGoal")', function() {
        // TODO: update the code to test the property yardsToGoal
        expect(instance).to.have.property('yardsToGoal');
        // expect(instance.yardsToGoal).to.be(expectedValueLiteral);
      });

      it('should have the property yardsGained (base name: "yardsGained")', function() {
        // TODO: update the code to test the property yardsGained
        expect(instance).to.have.property('yardsGained');
        // expect(instance.yardsGained).to.be(expectedValueLiteral);
      });

      it('should have the property playTypeId (base name: "playTypeId")', function() {
        // TODO: update the code to test the property playTypeId
        expect(instance).to.have.property('playTypeId');
        // expect(instance.playTypeId).to.be(expectedValueLiteral);
      });

      it('should have the property playType (base name: "playType")', function() {
        // TODO: update the code to test the property playType
        expect(instance).to.have.property('playType');
        // expect(instance.playType).to.be(expectedValueLiteral);
      });

      it('should have the property epa (base name: "epa")', function() {
        // TODO: update the code to test the property epa
        expect(instance).to.have.property('epa');
        // expect(instance.epa).to.be(expectedValueLiteral);
      });

      it('should have the property garbageTime (base name: "garbageTime")', function() {
        // TODO: update the code to test the property garbageTime
        expect(instance).to.have.property('garbageTime');
        // expect(instance.garbageTime).to.be(expectedValueLiteral);
      });

      it('should have the property success (base name: "success")', function() {
        // TODO: update the code to test the property success
        expect(instance).to.have.property('success');
        // expect(instance.success).to.be(expectedValueLiteral);
      });

      it('should have the property rushPass (base name: "rushPass")', function() {
        // TODO: update the code to test the property rushPass
        expect(instance).to.have.property('rushPass');
        // expect(instance.rushPass).to.be(expectedValueLiteral);
      });

      it('should have the property downType (base name: "downType")', function() {
        // TODO: update the code to test the property downType
        expect(instance).to.have.property('downType');
        // expect(instance.downType).to.be(expectedValueLiteral);
      });

      it('should have the property playText (base name: "playText")', function() {
        // TODO: update the code to test the property playText
        expect(instance).to.have.property('playText');
        // expect(instance.playText).to.be(expectedValueLiteral);
      });

    });
  });

}));
