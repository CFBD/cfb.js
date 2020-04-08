/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 1.25.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.13
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
    describe('GameLines', function() {
      beforeEach(function() {
        instance = new cfb.GameLines();
      });

      it('should create an instance of GameLines', function() {
        // TODO: update the code to test GameLines
        expect(instance).to.be.a(cfb.GameLines);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property homeTeam (base name: "homeTeam")', function() {
        // TODO: update the code to test the property homeTeam
        expect(instance).to.have.property('homeTeam');
        // expect(instance.homeTeam).to.be(expectedValueLiteral);
      });

      it('should have the property homeScore (base name: "homeScore")', function() {
        // TODO: update the code to test the property homeScore
        expect(instance).to.have.property('homeScore');
        // expect(instance.homeScore).to.be(expectedValueLiteral);
      });

      it('should have the property awayTeam (base name: "awayTeam")', function() {
        // TODO: update the code to test the property awayTeam
        expect(instance).to.have.property('awayTeam');
        // expect(instance.awayTeam).to.be(expectedValueLiteral);
      });

      it('should have the property awayScore (base name: "awayScore")', function() {
        // TODO: update the code to test the property awayScore
        expect(instance).to.have.property('awayScore');
        // expect(instance.awayScore).to.be(expectedValueLiteral);
      });

      it('should have the property lines (base name: "lines")', function() {
        // TODO: update the code to test the property lines
        expect(instance).to.have.property('lines');
        // expect(instance.lines).to.be(expectedValueLiteral);
      });

    });
  });

}));
