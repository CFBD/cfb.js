/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.3.4
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
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
    describe('BoxScorePlayersPpa', function() {
      beforeEach(function() {
        instance = new cfb.BoxScorePlayersPpa();
      });

      it('should create an instance of BoxScorePlayersPpa', function() {
        // TODO: update the code to test BoxScorePlayersPpa
        expect(instance).to.be.a(cfb.BoxScorePlayersPpa);
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

      it('should have the property position (base name: "position")', function() {
        // TODO: update the code to test the property position
        expect(instance).to.have.property('position');
        // expect(instance.position).to.be(expectedValueLiteral);
      });

      it('should have the property average (base name: "average")', function() {
        // TODO: update the code to test the property average
        expect(instance).to.have.property('average');
        // expect(instance.average).to.be(expectedValueLiteral);
      });

      it('should have the property cumulative (base name: "cumulative")', function() {
        // TODO: update the code to test the property cumulative
        expect(instance).to.have.property('cumulative');
        // expect(instance.cumulative).to.be(expectedValueLiteral);
      });

    });
  });

}));
