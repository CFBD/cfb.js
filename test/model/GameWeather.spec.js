/*
 * College Football Data API
 * This is an API for accessing all sorts of college football data.  Please note that API keys should be supplied with \"Bearer \" prepended (e.g. \"Bearer your_key\"). API keys can be acquired from the CollegeFootballData.com website.
 *
 * OpenAPI spec version: 4.6.0
 * Contact: admin@collegefootballdata.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.43
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
    describe('GameWeather', function() {
      beforeEach(function() {
        instance = new cfb.GameWeather();
      });

      it('should create an instance of GameWeather', function() {
        // TODO: update the code to test GameWeather
        expect(instance).to.be.a(cfb.GameWeather);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property season (base name: "season")', function() {
        // TODO: update the code to test the property season
        expect(instance).to.have.property('season');
        // expect(instance.season).to.be(expectedValueLiteral);
      });

      it('should have the property week (base name: "week")', function() {
        // TODO: update the code to test the property week
        expect(instance).to.have.property('week');
        // expect(instance.week).to.be(expectedValueLiteral);
      });

      it('should have the property seasonType (base name: "seasonType")', function() {
        // TODO: update the code to test the property seasonType
        expect(instance).to.have.property('seasonType');
        // expect(instance.seasonType).to.be(expectedValueLiteral);
      });

      it('should have the property startTime (base name: "startTime")', function() {
        // TODO: update the code to test the property startTime
        expect(instance).to.have.property('startTime');
        // expect(instance.startTime).to.be(expectedValueLiteral);
      });

      it('should have the property gameIndoors (base name: "gameIndoors")', function() {
        // TODO: update the code to test the property gameIndoors
        expect(instance).to.have.property('gameIndoors');
        // expect(instance.gameIndoors).to.be(expectedValueLiteral);
      });

      it('should have the property homeTeam (base name: "homeTeam")', function() {
        // TODO: update the code to test the property homeTeam
        expect(instance).to.have.property('homeTeam');
        // expect(instance.homeTeam).to.be(expectedValueLiteral);
      });

      it('should have the property homeConference (base name: "homeConference")', function() {
        // TODO: update the code to test the property homeConference
        expect(instance).to.have.property('homeConference');
        // expect(instance.homeConference).to.be(expectedValueLiteral);
      });

      it('should have the property awayTeam (base name: "awayTeam")', function() {
        // TODO: update the code to test the property awayTeam
        expect(instance).to.have.property('awayTeam');
        // expect(instance.awayTeam).to.be(expectedValueLiteral);
      });

      it('should have the property awayConference (base name: "awayConference")', function() {
        // TODO: update the code to test the property awayConference
        expect(instance).to.have.property('awayConference');
        // expect(instance.awayConference).to.be(expectedValueLiteral);
      });

      it('should have the property venueId (base name: "venueId")', function() {
        // TODO: update the code to test the property venueId
        expect(instance).to.have.property('venueId');
        // expect(instance.venueId).to.be(expectedValueLiteral);
      });

      it('should have the property venue (base name: "venue")', function() {
        // TODO: update the code to test the property venue
        expect(instance).to.have.property('venue');
        // expect(instance.venue).to.be(expectedValueLiteral);
      });

      it('should have the property temperature (base name: "temperature")', function() {
        // TODO: update the code to test the property temperature
        expect(instance).to.have.property('temperature');
        // expect(instance.temperature).to.be(expectedValueLiteral);
      });

      it('should have the property dewPoint (base name: "dewPoint")', function() {
        // TODO: update the code to test the property dewPoint
        expect(instance).to.have.property('dewPoint');
        // expect(instance.dewPoint).to.be(expectedValueLiteral);
      });

      it('should have the property humidity (base name: "humidity")', function() {
        // TODO: update the code to test the property humidity
        expect(instance).to.have.property('humidity');
        // expect(instance.humidity).to.be(expectedValueLiteral);
      });

      it('should have the property precipitation (base name: "precipitation")', function() {
        // TODO: update the code to test the property precipitation
        expect(instance).to.have.property('precipitation');
        // expect(instance.precipitation).to.be(expectedValueLiteral);
      });

      it('should have the property snowfall (base name: "snowfall")', function() {
        // TODO: update the code to test the property snowfall
        expect(instance).to.have.property('snowfall');
        // expect(instance.snowfall).to.be(expectedValueLiteral);
      });

      it('should have the property windDirection (base name: "windDirection")', function() {
        // TODO: update the code to test the property windDirection
        expect(instance).to.have.property('windDirection');
        // expect(instance.windDirection).to.be(expectedValueLiteral);
      });

      it('should have the property windSpeed (base name: "windSpeed")', function() {
        // TODO: update the code to test the property windSpeed
        expect(instance).to.have.property('windSpeed');
        // expect(instance.windSpeed).to.be(expectedValueLiteral);
      });

      it('should have the property pressure (base name: "pressure")', function() {
        // TODO: update the code to test the property pressure
        expect(instance).to.have.property('pressure');
        // expect(instance.pressure).to.be(expectedValueLiteral);
      });

      it('should have the property weatherConditionCode (base name: "weatherConditionCode")', function() {
        // TODO: update the code to test the property weatherConditionCode
        expect(instance).to.have.property('weatherConditionCode');
        // expect(instance.weatherConditionCode).to.be(expectedValueLiteral);
      });

      it('should have the property weatherCondition (base name: "weatherCondition")', function() {
        // TODO: update the code to test the property weatherCondition
        expect(instance).to.have.property('weatherCondition');
        // expect(instance.weatherCondition).to.be(expectedValueLiteral);
      });

    });
  });

}));
