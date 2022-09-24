/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.8
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
    describe('TeamLocation', function() {
      beforeEach(function() {
        instance = new cfb.TeamLocation();
      });

      it('should create an instance of TeamLocation', function() {
        // TODO: update the code to test TeamLocation
        expect(instance).to.be.a(cfb.TeamLocation);
      });

      it('should have the property venueId (base name: "venue_id")', function() {
        // TODO: update the code to test the property venueId
        expect(instance).to.have.property('venueId');
        // expect(instance.venueId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property zip (base name: "zip")', function() {
        // TODO: update the code to test the property zip
        expect(instance).to.have.property('zip');
        // expect(instance.zip).to.be(expectedValueLiteral);
      });

      it('should have the property countryCode (base name: "country_code")', function() {
        // TODO: update the code to test the property countryCode
        expect(instance).to.have.property('countryCode');
        // expect(instance.countryCode).to.be(expectedValueLiteral);
      });

      it('should have the property timezone (base name: "timezone")', function() {
        // TODO: update the code to test the property timezone
        expect(instance).to.have.property('timezone');
        // expect(instance.timezone).to.be(expectedValueLiteral);
      });

      it('should have the property latitude (base name: "latitude")', function() {
        // TODO: update the code to test the property latitude
        expect(instance).to.have.property('latitude');
        // expect(instance.latitude).to.be(expectedValueLiteral);
      });

      it('should have the property longitude (base name: "longitude")', function() {
        // TODO: update the code to test the property longitude
        expect(instance).to.have.property('longitude');
        // expect(instance.longitude).to.be(expectedValueLiteral);
      });

      it('should have the property elevation (base name: "elevation")', function() {
        // TODO: update the code to test the property elevation
        expect(instance).to.have.property('elevation');
        // expect(instance.elevation).to.be(expectedValueLiteral);
      });

      it('should have the property capacity (base name: "capacity")', function() {
        // TODO: update the code to test the property capacity
        expect(instance).to.have.property('capacity');
        // expect(instance.capacity).to.be(expectedValueLiteral);
      });

      it('should have the property yearConstructed (base name: "year_constructed")', function() {
        // TODO: update the code to test the property yearConstructed
        expect(instance).to.have.property('yearConstructed');
        // expect(instance.yearConstructed).to.be(expectedValueLiteral);
      });

      it('should have the property grass (base name: "grass")', function() {
        // TODO: update the code to test the property grass
        expect(instance).to.have.property('grass');
        // expect(instance.grass).to.be(expectedValueLiteral);
      });

      it('should have the property dome (base name: "dome")', function() {
        // TODO: update the code to test the property dome
        expect(instance).to.have.property('dome');
        // expect(instance.dome).to.be(expectedValueLiteral);
      });

    });
  });

}));