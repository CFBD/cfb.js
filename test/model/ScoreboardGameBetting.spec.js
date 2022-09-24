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
    describe('ScoreboardGameBetting', function() {
      beforeEach(function() {
        instance = new cfb.ScoreboardGameBetting();
      });

      it('should create an instance of ScoreboardGameBetting', function() {
        // TODO: update the code to test ScoreboardGameBetting
        expect(instance).to.be.a(cfb.ScoreboardGameBetting);
      });

      it('should have the property spread (base name: "spread")', function() {
        // TODO: update the code to test the property spread
        expect(instance).to.have.property('spread');
        // expect(instance.spread).to.be(expectedValueLiteral);
      });

      it('should have the property overUnder (base name: "overUnder")', function() {
        // TODO: update the code to test the property overUnder
        expect(instance).to.have.property('overUnder');
        // expect(instance.overUnder).to.be(expectedValueLiteral);
      });

      it('should have the property homeMoneyline (base name: "homeMoneyline")', function() {
        // TODO: update the code to test the property homeMoneyline
        expect(instance).to.have.property('homeMoneyline');
        // expect(instance.homeMoneyline).to.be(expectedValueLiteral);
      });

      it('should have the property awayMoneyline (base name: "awayMoneyline")', function() {
        // TODO: update the code to test the property awayMoneyline
        expect(instance).to.have.property('awayMoneyline');
        // expect(instance.awayMoneyline).to.be(expectedValueLiteral);
      });

    });
  });

}));
