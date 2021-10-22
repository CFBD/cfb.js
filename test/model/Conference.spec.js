/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.2.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.23
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
    describe('Conference', function() {
      beforeEach(function() {
        instance = new cfb.Conference();
      });

      it('should create an instance of Conference', function() {
        // TODO: update the code to test Conference
        expect(instance).to.be.a(cfb.Conference);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property shortName (base name: "short_name")', function() {
        // TODO: update the code to test the property shortName
        expect(instance).to.have.property('shortName');
        // expect(instance.shortName).to.be(expectedValueLiteral);
      });

      it('should have the property abbreviation (base name: "abbreviation")', function() {
        // TODO: update the code to test the property abbreviation
        expect(instance).to.have.property('abbreviation');
        // expect(instance.abbreviation).to.be(expectedValueLiteral);
      });

      it('should have the property classification (base name: "classification")', function() {
        // TODO: update the code to test the property classification
        expect(instance).to.have.property('classification');
        // expect(instance.classification).to.be(expectedValueLiteral);
      });

    });
  });

}));
