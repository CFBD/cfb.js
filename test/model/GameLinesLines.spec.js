/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.5.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
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
    describe('GameLinesLines', function() {
      beforeEach(function() {
        instance = new cfb.GameLinesLines();
      });

      it('should create an instance of GameLinesLines', function() {
        // TODO: update the code to test GameLinesLines
        expect(instance).to.be.a(cfb.GameLinesLines);
      });

      it('should have the property provider (base name: "provider")', function() {
        // TODO: update the code to test the property provider
        expect(instance).to.have.property('provider');
        // expect(instance.provider).to.be(expectedValueLiteral);
      });

      it('should have the property spread (base name: "spread")', function() {
        // TODO: update the code to test the property spread
        expect(instance).to.have.property('spread');
        // expect(instance.spread).to.be(expectedValueLiteral);
      });

      it('should have the property formattedSpread (base name: "formattedSpread")', function() {
        // TODO: update the code to test the property formattedSpread
        expect(instance).to.have.property('formattedSpread');
        // expect(instance.formattedSpread).to.be(expectedValueLiteral);
      });

      it('should have the property spreadOpen (base name: "spreadOpen")', function() {
        // TODO: update the code to test the property spreadOpen
        expect(instance).to.have.property('spreadOpen');
        // expect(instance.spreadOpen).to.be(expectedValueLiteral);
      });

      it('should have the property overUnder (base name: "overUnder")', function() {
        // TODO: update the code to test the property overUnder
        expect(instance).to.have.property('overUnder');
        // expect(instance.overUnder).to.be(expectedValueLiteral);
      });

      it('should have the property overUnderOpen (base name: "overUnderOpen")', function() {
        // TODO: update the code to test the property overUnderOpen
        expect(instance).to.have.property('overUnderOpen');
        // expect(instance.overUnderOpen).to.be(expectedValueLiteral);
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
