# cfb.GamesApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAdvancedBoxScore**](GamesApi.md#getAdvancedBoxScore) | **GET** /game/box/advanced | Get advanced box score
[**getGameMedia**](GamesApi.md#getGameMedia) | **GET** /games/media | Get game media information (TV, radio, etc)
[**getGames**](GamesApi.md#getGames) | **GET** /games | Get game information
[**getPlayerGameStats**](GamesApi.md#getPlayerGameStats) | **GET** /games/players | Get player statistics by game
[**getTeamGameStats**](GamesApi.md#getTeamGameStats) | **GET** /games/teams | Get team statistics by game
[**getTeamRecords**](GamesApi.md#getTeamRecords) | **GET** /records | Get records by year


<a name="getAdvancedBoxScore"></a>
# **getAdvancedBoxScore**
> [BoxScore] getAdvancedBoxScore(gameId)

Get advanced box score

Advanced box score

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.GamesApi();

let gameId = 56; // Number | Game id parameters

apiInstance.getAdvancedBoxScore(gameId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | **Number**| Game id parameters | 

### Return type

[**[BoxScore]**](BoxScore.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGameMedia"></a>
# **getGameMedia**
> [GameMedia] getGameMedia(year, opts)

Get game media information (TV, radio, etc)

Game media information (TV, radio, etc)

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.GamesApi();

let year = 56; // Number | Year filter

let opts = { 
  'week': 56, // Number | Week filter
  'seasonType': 56, // Number | Season type filter (regular, postseason, or both)
  'team': "team_example", // String | Team filter
  'conference': "conference_example", // String | Conference filter
  'mediaType': "mediaType_example" // String | Media type filter (tv, radio, web, ppv, or mobile)
};
apiInstance.getGameMedia(year, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter | 
 **week** | **Number**| Week filter | [optional] 
 **seasonType** | **Number**| Season type filter (regular, postseason, or both) | [optional] 
 **team** | **String**| Team filter | [optional] 
 **conference** | **String**| Conference filter | [optional] 
 **mediaType** | **String**| Media type filter (tv, radio, web, ppv, or mobile) | [optional] 

### Return type

[**[GameMedia]**](GameMedia.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getGames"></a>
# **getGames**
> [Game] getGames(year, opts)

Get game information

Game results

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.GamesApi();

let year = 56; // Number | Year/season filter for games

let opts = { 
  'week': 56, // Number | Week filter
  'seasonType': "regular", // String | Season type filter (regular or postseason)
  'team': "team_example", // String | Team
  'home': "home_example", // String | Home team filter
  'away': "away_example", // String | Away team filter
  'conference': "conference_example", // String | Conference abbreviation filter
  'id': 56 // Number | id filter for querying a single game
};
apiInstance.getGames(year, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlayerGameStats"></a>
# **getPlayerGameStats**
> [PlayerGame] getPlayerGameStats(year, opts)

Get player statistics by game

Player game stats

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.GamesApi();

let year = 56; // Number | Year/season filter for games

let opts = { 
  'week': 56, // Number | Week filter
  'seasonType': "regular", // String | Season type filter (regular or postseason)
  'team': "team_example", // String | Team filter
  'conference': "conference_example", // String | Conference abbreviation filter
  'category': "category_example", // String | Category filter (e.g defensive)
  'gameId': 56 // Number | Game id filter
};
apiInstance.getPlayerGameStats(year, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamGameStats"></a>
# **getTeamGameStats**
> [TeamGame] getTeamGameStats(year, opts)

Get team statistics by game

Team game stats

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.GamesApi();

let year = 56; // Number | Year/season filter for games

let opts = { 
  'week': 56, // Number | Week filter
  'seasonType': "regular", // String | Season type filter (regular or postseason)
  'team': "team_example", // String | Team filter
  'conference': "conference_example", // String | Conference abbreviation filter
  'gameId': 56 // Number | Game id filter
};
apiInstance.getTeamGameStats(year, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamRecords"></a>
# **getTeamRecords**
> [TeamRecord] getTeamRecords(opts)

Get records by year

Team records by year

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.GamesApi();

let opts = { 
  'year': 56, // Number | Year filter
  'team': "team_example", // String | Team filter
  'conference': "conference_example" // String | Conference filter
};
apiInstance.getTeamRecords(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

