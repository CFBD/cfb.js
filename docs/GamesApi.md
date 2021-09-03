# cfb.GamesApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAdvancedBoxScore**](GamesApi.md#getAdvancedBoxScore) | **GET** /game/box/advanced | Advanced box scores
[**getCalendar**](GamesApi.md#getCalendar) | **GET** /calendar | Season calendar
[**getGameMedia**](GamesApi.md#getGameMedia) | **GET** /games/media | Game media information and schedules
[**getGameWeather**](GamesApi.md#getGameWeather) | **GET** /games/weather | Game weather information (Patreon only)
[**getGames**](GamesApi.md#getGames) | **GET** /games | Games and results
[**getPlayerGameStats**](GamesApi.md#getPlayerGameStats) | **GET** /games/players | Player game stats
[**getScoreboard**](GamesApi.md#getScoreboard) | **GET** /scoreboard | Live game results (Patreon only)
[**getTeamGameStats**](GamesApi.md#getTeamGameStats) | **GET** /games/teams | Team game stats
[**getTeamRecords**](GamesApi.md#getTeamRecords) | **GET** /records | Team records


<a name="getAdvancedBoxScore"></a>
# **getAdvancedBoxScore**
> BoxScore getAdvancedBoxScore(gameId)

Advanced box scores

Get advanced box score data

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.GamesApi();

var gameId = 56; // Number | Game id parameters

apiInstance.getAdvancedBoxScore(gameId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | **Number**| Game id parameters | 

### Return type

[**BoxScore**](BoxScore.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCalendar"></a>
# **getCalendar**
> [Week] getCalendar(year)

Season calendar

Get calendar of weeks by season

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.GamesApi();

var year = 56; // Number | Year filter

apiInstance.getCalendar(year).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter | 

### Return type

[**[Week]**](Week.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGameMedia"></a>
# **getGameMedia**
> [GameMedia] getGameMedia(year, opts)

Game media information and schedules

Game media information (TV, radio, etc)

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.GamesApi();

var year = 56; // Number | Year filter

var opts = { 
  'week': 56, // Number | Week filter
  'seasonType': "seasonType_example", // String | Season type filter (regular, postseason, or both)
  'team': "team_example", // String | Team filter
  'conference': "conference_example", // String | Conference filter
  'mediaType': "mediaType_example" // String | Media type filter (tv, radio, web, ppv, or mobile)
};
apiInstance.getGameMedia(year, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter | 
 **week** | **Number**| Week filter | [optional] 
 **seasonType** | **String**| Season type filter (regular, postseason, or both) | [optional] 
 **team** | **String**| Team filter | [optional] 
 **conference** | **String**| Conference filter | [optional] 
 **mediaType** | **String**| Media type filter (tv, radio, web, ppv, or mobile) | [optional] 

### Return type

[**[GameMedia]**](GameMedia.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGameWeather"></a>
# **getGameWeather**
> [GameWeather] getGameWeather(year, opts)

Game weather information (Patreon only)

Weather information for the hour of kickoff

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.GamesApi();

var year = 56; // Number | Year filter

var opts = { 
  'week': 56, // Number | Week filter
  'seasonType': "seasonType_example", // String | Season type filter (regular, postseason, or both)
  'team': "team_example", // String | Team filter
  'conference': "conference_example" // String | Conference filter
};
apiInstance.getGameWeather(year, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter | 
 **week** | **Number**| Week filter | [optional] 
 **seasonType** | **String**| Season type filter (regular, postseason, or both) | [optional] 
 **team** | **String**| Team filter | [optional] 
 **conference** | **String**| Conference filter | [optional] 

### Return type

[**[GameWeather]**](GameWeather.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGames"></a>
# **getGames**
> [Game] getGames(year, opts)

Games and results

Get game results

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.GamesApi();

var year = 56; // Number | Year/season filter for games

var opts = { 
  'week': 56, // Number | Week filter
  'seasonType': "regular", // String | Season type filter (regular or postseason)
  'team': "team_example", // String | Team
  'home': "home_example", // String | Home team filter
  'away': "away_example", // String | Away team filter
  'conference': "conference_example", // String | Conference abbreviation filter
  'id': 56 // Number | id filter for querying a single game
};
apiInstance.getGames(year, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year/season filter for games | 
 **week** | **Number**| Week filter | [optional] 
 **seasonType** | **String**| Season type filter (regular or postseason) | [optional] [default to regular]
 **team** | **String**| Team | [optional] 
 **home** | **String**| Home team filter | [optional] 
 **away** | **String**| Away team filter | [optional] 
 **conference** | **String**| Conference abbreviation filter | [optional] 
 **id** | **Number**| id filter for querying a single game | [optional] 

### Return type

[**[Game]**](Game.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlayerGameStats"></a>
# **getPlayerGameStats**
> [PlayerGame] getPlayerGameStats(year, opts)

Player game stats

Player stats broken down by game

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.GamesApi();

var year = 56; // Number | Year/season filter for games

var opts = { 
  'week': 56, // Number | Week filter
  'seasonType': "regular", // String | Season type filter (regular or postseason)
  'team': "team_example", // String | Team filter
  'conference': "conference_example", // String | Conference abbreviation filter
  'category': "category_example", // String | Category filter (e.g defensive)
  'gameId': 56 // Number | Game id filter
};
apiInstance.getPlayerGameStats(year, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year/season filter for games | 
 **week** | **Number**| Week filter | [optional] 
 **seasonType** | **String**| Season type filter (regular or postseason) | [optional] [default to regular]
 **team** | **String**| Team filter | [optional] 
 **conference** | **String**| Conference abbreviation filter | [optional] 
 **category** | **String**| Category filter (e.g defensive) | [optional] 
 **gameId** | **Number**| Game id filter | [optional] 

### Return type

[**[PlayerGame]**](PlayerGame.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getScoreboard"></a>
# **getScoreboard**
> [ScoreboardGame] getScoreboard()

Live game results (Patreon only)

Get live game results

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.GamesApi();
apiInstance.getScoreboard().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ScoreboardGame]**](ScoreboardGame.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamGameStats"></a>
# **getTeamGameStats**
> [TeamGame] getTeamGameStats(year, opts)

Team game stats

Team stats broken down by game

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.GamesApi();

var year = 56; // Number | Year/season filter for games

var opts = { 
  'week': 56, // Number | Week filter
  'seasonType': "regular", // String | Season type filter (regular or postseason)
  'team': "team_example", // String | Team filter
  'conference': "conference_example", // String | Conference abbreviation filter
  'gameId': 56 // Number | Game id filter
};
apiInstance.getTeamGameStats(year, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year/season filter for games | 
 **week** | **Number**| Week filter | [optional] 
 **seasonType** | **String**| Season type filter (regular or postseason) | [optional] [default to regular]
 **team** | **String**| Team filter | [optional] 
 **conference** | **String**| Conference abbreviation filter | [optional] 
 **gameId** | **Number**| Game id filter | [optional] 

### Return type

[**[TeamGame]**](TeamGame.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamRecords"></a>
# **getTeamRecords**
> [TeamRecord] getTeamRecords(opts)

Team records

Get team records by year

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.GamesApi();

var opts = { 
  'year': 56, // Number | Year filter
  'team': "team_example", // String | Team filter
  'conference': "conference_example" // String | Conference filter
};
apiInstance.getTeamRecords(opts).then(function(data) {
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
 **conference** | **String**| Conference filter | [optional] 

### Return type

[**[TeamRecord]**](TeamRecord.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

