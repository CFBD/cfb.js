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
    describe('PlayerUsageUsage', function() {
      beforeEach(function() {
        instance = new cfb.PlayerUsageUsage();
      });

      it('should create an instance of PlayerUsageUsage', function() {
        // TODO: update the code to test PlayerUsageUsage
        expect(instance).to.be.a(cfb.PlayerUsageUsage);
      });

      it('should have the property overall (base name: "overall")', function() {
        // TODO: update the code to test the property overall
        expect(instance).to.have.property('overall');
        // expect(instance.overall).to.be(expectedValueLiteral);
      });

      it('should have the property pass (base name: "pass")', function() {
        // TODO: update the code to test the property pass
        expect(instance).to.have.property('pass');
        // expect(instance.pass).to.be(expectedValueLiteral);
      });

      it('should have the property rush (base name: "rush")', function() {
        // TODO: update the code to test the property rush
        expect(instance).to.have.property('rush');
        // expect(instance.rush).to.be(expectedValueLiteral);
      });

      it('should have the property firstDown (base name: "firstDown")', function() {
        // TODO: update the code to test the property firstDown
        expect(instance).to.have.property('firstDown');
        // expect(instance.firstDown).to.be(expectedValueLiteral);
      });

      it('should have the property secondDown (base name: "secondDown")', function() {
        // TODO: update the code to test the property secondDown
        expect(instance).to.have.property('secondDown');
        // expect(instance.secondDown).to.be(expectedValueLiteral);
      });

      it('should have the property thirdDown (base name: "thirdDown")', function() {
        // TODO: update the code to test the property thirdDown
        expect(instance).to.have.property('thirdDown');
        // expect(instance.thirdDown).to.be(expectedValueLiteral);
      });

      it('should have the property standardDowns (base name: "standardDowns")', function() {
        // TODO: update the code to test the property standardDowns
        expect(instance).to.have.property('standardDowns');
        // expect(instance.standardDowns).to.be(expectedValueLiteral);
      });

      it('should have the property passingDowns (base name: "passingDowns")', function() {
        // TODO: update the code to test the property passingDowns
        expect(instance).to.have.property('passingDowns');
        // expect(instance.passingDowns).to.be(expectedValueLiteral);
      });

    });
  });

}));
