/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.4.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
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
    describe('TeamSPRatingDefenseHavoc', function() {
      beforeEach(function() {
        instance = new cfb.TeamSPRatingDefenseHavoc();
      });

      it('should create an instance of TeamSPRatingDefenseHavoc', function() {
        // TODO: update the code to test TeamSPRatingDefenseHavoc
        expect(instance).to.be.a(cfb.TeamSPRatingDefenseHavoc);
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
