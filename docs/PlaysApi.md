# cfb.PlaysApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPlayStatTypes**](PlaysApi.md#getPlayStatTypes) | **GET** /play/stat/types | Types of player play stats
[**getPlayStats**](PlaysApi.md#getPlayStats) | **GET** /play/stats | Play stats by play
[**getPlayTypes**](PlaysApi.md#getPlayTypes) | **GET** /play/types | Play types
[**getPlays**](PlaysApi.md#getPlays) | **GET** /plays | Play by play data


<a name="getPlayStatTypes"></a>
# **getPlayStatTypes**
> [PlayStatType] getPlayStatTypes()

Types of player play stats

Type of play stats

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.PlaysApi();
apiInstance.getPlayStatTypes().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PlayStatType]**](PlayStatType.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlayStats"></a>
# **getPlayStats**
> [PlayStat] getPlayStats(opts)

Play stats by play

Gets player stats associated by play (limit 1000)

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.PlaysApi();

var opts = { 
  'year': 56, // Number | Year filter
  'week': 56, // Number | Week filter
  'team': "team_example", // String | Team filter
  'gameId': 56, // Number | gameId filter (from /games endpoint)
  'athleteId': 56, // Number | athleteId filter (from /roster endpoint)
  'statTypeId': 56, // Number | statTypeId filter (from /play/stat/types endpoint)
  'seasonType': "seasonType_example", // String | regular, postseason, or both
  'conference': "conference_example" // String | conference abbreviation filter
};
apiInstance.getPlayStats(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter | [optional] 
 **week** | **Number**| Week filter | [optional] 
 **team** | **String**| Team filter | [optional] 
 **gameId** | **Number**| gameId filter (from /games endpoint) | [optional] 
 **athleteId** | **Number**| athleteId filter (from /roster endpoint) | [optional] 
 **statTypeId** | **Number**| statTypeId filter (from /play/stat/types endpoint) | [optional] 
 **seasonType** | **String**| regular, postseason, or both | [optional] 
 **conference** | **String**| conference abbreviation filter | [optional] 

### Return type

[**[PlayStat]**](PlayStat.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlayTypes"></a>
# **getPlayTypes**
> [PlayType] getPlayTypes()

Play types

Types of plays

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.PlaysApi();
apiInstance.getPlayTypes().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PlayType]**](PlayType.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlays"></a>
# **getPlays**
> [Play] getPlays(year, week, opts)

Play by play data

Get play data and results

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.PlaysApi();

var year = 56; // Number | Year filter

var week = 56; // Number | Week filter (required if team, offense, or defense, not specified)

var opts = { 
  'seasonType': "regular", // String | Season type filter
  'team': "team_example", // String | Team filter
  'offense': "offense_example", // String | Offensive team filter
  'defense': "defense_example", // String | Defensive team filter
  'conference': "conference_example", // String | Conference filter
  'offenseConference': "offenseConference_example", // String | Offensive conference filter
  'defenseConference': "defenseConference_example", // String | Defensive conference filter
  'playType': 56 // Number | Play type filter
};
apiInstance.getPlays(year, week, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter | 
 **week** | **Number**| Week filter (required if team, offense, or defense, not specified) | 
 **seasonType** | **String**| Season type filter | [optional] [default to regular]
 **team** | **String**| Team filter | [optional] 
 **offense** | **String**| Offensive team filter | [optional] 
 **defense** | **String**| Defensive team filter | [optional] 
 **conference** | **String**| Conference filter | [optional] 
 **offenseConference** | **String**| Offensive conference filter | [optional] 
 **defenseConference** | **String**| Defensive conference filter | [optional] 
 **playType** | **Number**| Play type filter | [optional] 

### Return type

[**[Play]**](Play.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

