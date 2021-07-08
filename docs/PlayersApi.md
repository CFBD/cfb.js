# cfb.PlayersApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPlayerSeasonStats**](PlayersApi.md#getPlayerSeasonStats) | **GET** /stats/player/season | Player stats by season
[**getPlayerUsage**](PlayersApi.md#getPlayerUsage) | **GET** /player/usage | Player usage metrics broken down by season
[**getReturningProduction**](PlayersApi.md#getReturningProduction) | **GET** /player/returning | Team returning production metrics
[**playerSearch**](PlayersApi.md#playerSearch) | **GET** /player/search | Search for player information


<a name="getPlayerSeasonStats"></a>
# **getPlayerSeasonStats**
> [PlayerSeasonStat] getPlayerSeasonStats(year, opts)

Player stats by season

Season player stats

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.PlayersApi();

var year = 56; // Number | Year filter

var opts = { 
  'team': "team_example", // String | Team filter
  'conference': "conference_example", // String | Conference abbreviation filter
  'startWeek': 56, // Number | Start week filter
  'endWeek': 56, // Number | Start week filter
  'seasonType': "seasonType_example", // String | Season type filter (regular, postseason, or both)
  'category': "category_example" // String | Stat category filter (e.g. passing)
};
apiInstance.getPlayerSeasonStats(year, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter | 
 **team** | **String**| Team filter | [optional] 
 **conference** | **String**| Conference abbreviation filter | [optional] 
 **startWeek** | **Number**| Start week filter | [optional] 
 **endWeek** | **Number**| Start week filter | [optional] 
 **seasonType** | **String**| Season type filter (regular, postseason, or both) | [optional] 
 **category** | **String**| Stat category filter (e.g. passing) | [optional] 

### Return type

[**[PlayerSeasonStat]**](PlayerSeasonStat.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlayerUsage"></a>
# **getPlayerUsage**
> [PlayerUsage] getPlayerUsage(year, opts)

Player usage metrics broken down by season

Player usage metrics by season

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.PlayersApi();

var year = 2020; // Number | Year filter

var opts = { 
  'team': "team_example", // String | Team filter
  'conference': "conference_example", // String | Conference abbreviation filter
  'position': "position_example", // String | Position abbreviation filter
  'playerId': 56, // Number | Player id filter
  'excludeGarbageTime': true // Boolean | Filter to remove garbage time plays from calculations
};
apiInstance.getPlayerUsage(year, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter | [default to 2020]
 **team** | **String**| Team filter | [optional] 
 **conference** | **String**| Conference abbreviation filter | [optional] 
 **position** | **String**| Position abbreviation filter | [optional] 
 **playerId** | **Number**| Player id filter | [optional] 
 **excludeGarbageTime** | **Boolean**| Filter to remove garbage time plays from calculations | [optional] 

### Return type

[**[PlayerUsage]**](PlayerUsage.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturningProduction"></a>
# **getReturningProduction**
> [ReturningProduction] getReturningProduction(opts)

Team returning production metrics

Returning production metrics

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.PlayersApi();

var opts = { 
  'year': 56, // Number | Year filter
  'team': "team_example", // String | Team filter
  'conference': "conference_example" // String | Conference abbreviation filter
};
apiInstance.getReturningProduction(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter | [optional] 
 **team** | **String**| Team filter | [optional] 
 **conference** | **String**| Conference abbreviation filter | [optional] 

### Return type

[**[ReturningProduction]**](ReturningProduction.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="playerSearch"></a>
# **playerSearch**
> [PlayerSearchResult] playerSearch(searchTerm, opts)

Search for player information

Search for players

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.PlayersApi();

var searchTerm = "searchTerm_example"; // String | Term to search on

var opts = { 
  'position': "position_example", // String | Position abbreviation filter
  'team': "team_example", // String | Team filter
  'year': 56 // Number | Year filter
};
apiInstance.playerSearch(searchTerm, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerm** | **String**| Term to search on | 
 **position** | **String**| Position abbreviation filter | [optional] 
 **team** | **String**| Team filter | [optional] 
 **year** | **Number**| Year filter | [optional] 

### Return type

[**[PlayerSearchResult]**](PlayerSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

