/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.5.2
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.39
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
    describe('BoxScoreTeamsHavoc', function() {
      beforeEach(function() {
        instance = new cfb.BoxScoreTeamsHavoc();
      });

      it('should create an instance of BoxScoreTeamsHavoc', function() {
        // TODO: update the code to test BoxScoreTeamsHavoc
        expect(instance).to.be.a(cfb.BoxScoreTeamsHavoc);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property total (base name: "total")', function() {
        // TODO: update the code to test the property total
        expect(instance).to.have.property('total');
        // expect(instance.total).to.be(expectedValueLiteral);
      });

      it('should have the property frontSeven (base name: "frontSeven")', function() {
        // TODO: update the code to test the property frontSeven
        expect(instance).to.have.property('frontSeven');
        // expect(instance.frontSeven).to.be(expectedValueLiteral);
      });

      it('should have the property db (base name: "db")', function() {
        // TODO: update the code to test the property db
        expect(instance).to.have.property('db');
        // expect(instance.db).to.be(expectedValueLiteral);
      });

    });
  });

}));
