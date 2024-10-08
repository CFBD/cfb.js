/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.6.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
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
    describe('TeamRecordTotal', function() {
      beforeEach(function() {
        instance = new cfb.TeamRecordTotal();
      });

      it('should create an instance of TeamRecordTotal', function() {
        // TODO: update the code to test TeamRecordTotal
        expect(instance).to.be.a(cfb.TeamRecordTotal);
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

    });
  });

}));
