/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.5
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
    describe('Player', function() {
      beforeEach(function() {
        instance = new cfb.Player();
      });

      it('should create an instance of Player', function() {
        // TODO: update the code to test Player
        expect(instance).to.be.a(cfb.Player);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property firstName (base name: "first_name")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "last_name")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property height (base name: "height")', function() {
        // TODO: update the code to test the property height
        expect(instance).to.have.property('height');
        // expect(instance.height).to.be(expectedValueLiteral);
      });

      it('should have the property weight (base name: "weight")', function() {
        // TODO: update the code to test the property weight
        expect(instance).to.have.property('weight');
        // expect(instance.weight).to.be(expectedValueLiteral);
      });

      it('should have the property jersey (base name: "jersey")', function() {
        // TODO: update the code to test the property jersey
        expect(instance).to.have.property('jersey');
        // expect(instance.jersey).to.be(expectedValueLiteral);
      });

      it('should have the property year (base name: "year")', function() {
        // TODO: update the code to test the property year
        expect(instance).to.have.property('year');
        // expect(instance.year).to.be(expectedValueLiteral);
      });

      it('should have the property position (base name: "position")', function() {
        // TODO: update the code to test the property position
        expect(instance).to.have.property('position');
        // expect(instance.position).to.be(expectedValueLiteral);
      });

      it('should have the property homeCity (base name: "home_city")', function() {
        // TODO: update the code to test the property homeCity
        expect(instance).to.have.property('homeCity');
        // expect(instance.homeCity).to.be(expectedValueLiteral);
      });

      it('should have the property homeState (base name: "home_state")', function() {
        // TODO: update the code to test the property homeState
        expect(instance).to.have.property('homeState');
        // expect(instance.homeState).to.be(expectedValueLiteral);
      });

      it('should have the property homeCountry (base name: "home_country")', function() {
        // TODO: update the code to test the property homeCountry
        expect(instance).to.have.property('homeCountry');
        // expect(instance.homeCountry).to.be(expectedValueLiteral);
      });

      it('should have the property homeLatitude (base name: "home_latitude")', function() {
        // TODO: update the code to test the property homeLatitude
        expect(instance).to.have.property('homeLatitude');
        // expect(instance.homeLatitude).to.be(expectedValueLiteral);
      });

      it('should have the property homeLongitude (base name: "home_longitude")', function() {
        // TODO: update the code to test the property homeLongitude
        expect(instance).to.have.property('homeLongitude');
        // expect(instance.homeLongitude).to.be(expectedValueLiteral);
      });

      it('should have the property homeCountyFips (base name: "home_county_fips")', function() {
        // TODO: update the code to test the property homeCountyFips
        expect(instance).to.have.property('homeCountyFips');
        // expect(instance.homeCountyFips).to.be(expectedValueLiteral);
      });

      it('should have the property recruitIds (base name: "recruit_ids")', function() {
        // TODO: update the code to test the property recruitIds
        expect(instance).to.have.property('recruitIds');
        // expect(instance.recruitIds).to.be(expectedValueLiteral);
      });

    });
  });

}));
