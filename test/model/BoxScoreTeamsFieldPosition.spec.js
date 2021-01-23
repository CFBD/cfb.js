/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  It currently has a wide array of data ranging from play by play to player statistics to game scores and more.
 *
 * OpenAPI spec version: 2.3.5
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
    describe('BoxScoreTeamsFieldPosition', function() {
      beforeEach(function() {
        instance = new cfb.BoxScoreTeamsFieldPosition();
      });

      it('should create an instance of BoxScoreTeamsFieldPosition', function() {
        // TODO: update the code to test BoxScoreTeamsFieldPosition
        expect(instance).to.be.a(cfb.BoxScoreTeamsFieldPosition);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property averageStart (base name: "averageStart")', function() {
        // TODO: update the code to test the property averageStart
        expect(instance).to.have.property('averageStart');
        // expect(instance.averageStart).to.be(expectedValueLiteral);
      });

      it('should have the property averageStartingPredictedPoints (base name: "averageStartingPredictedPoints")', function() {
        // TODO: update the code to test the property averageStartingPredictedPoints
        expect(instance).to.have.property('averageStartingPredictedPoints');
        // expect(instance.averageStartingPredictedPoints).to.be(expectedValueLiteral);
      });

    });
  });

}));
