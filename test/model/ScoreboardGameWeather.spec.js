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
    describe('ScoreboardGameWeather', function() {
      beforeEach(function() {
        instance = new cfb.ScoreboardGameWeather();
      });

      it('should create an instance of ScoreboardGameWeather', function() {
        // TODO: update the code to test ScoreboardGameWeather
        expect(instance).to.be.a(cfb.ScoreboardGameWeather);
      });

      it('should have the property temperature (base name: "temperature")', function() {
        // TODO: update the code to test the property temperature
        expect(instance).to.have.property('temperature');
        // expect(instance.temperature).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property windSpeed (base name: "windSpeed")', function() {
        // TODO: update the code to test the property windSpeed
        expect(instance).to.have.property('windSpeed');
        // expect(instance.windSpeed).to.be(expectedValueLiteral);
      });

      it('should have the property windDirection (base name: "windDirection")', function() {
        // TODO: update the code to test the property windDirection
        expect(instance).to.have.property('windDirection');
        // expect(instance.windDirection).to.be(expectedValueLiteral);
      });

    });
  });

}));
