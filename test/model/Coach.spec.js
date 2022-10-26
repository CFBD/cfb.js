/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.4.11
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
    describe('Coach', function() {
      beforeEach(function() {
        instance = new cfb.Coach();
      });

      it('should create an instance of Coach', function() {
        // TODO: update the code to test Coach
        expect(instance).to.be.a(cfb.Coach);
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

      it('should have the property hireDate (base name: "hire_date")', function() {
        // TODO: update the code to test the property hireDate
        expect(instance).to.have.property('hireDate');
        // expect(instance.hireDate).to.be(expectedValueLiteral);
      });

      it('should have the property seasons (base name: "seasons")', function() {
        // TODO: update the code to test the property seasons
        expect(instance).to.have.property('seasons');
        // expect(instance.seasons).to.be(expectedValueLiteral);
      });

    });
  });

}));
