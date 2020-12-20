# cfb.GamesApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAdvancedBoxScore**](GamesApi.md#getAdvancedBoxScore) | **GET** /game/box/advanced | Advanced box scores
[**getCalendar**](GamesApi.md#getCalendar) | **GET** /calendar | Season calendar
[**getGameMedia**](GamesApi.md#getGameMedia) | **GET** /games/media | Game media information and schedules
[**getGames**](GamesApi.md#getGames) | **GET** /games | Games and results
[**getPlayerGameStats**](GamesApi.md#getPlayerGameStats) | **GET** /games/players | Player game stats
[**getTeamGameStats**](GamesApi.md#getTeamGameStats) | **GET** /games/teams | Team game stats
[**getTeamRecords**](GamesApi.md#getTeamRecords) | **GET** /records | Team records


<a name="getAdvancedBoxScore"></a>
# **getAdvancedBoxScore**
> BoxScore getAdvancedBoxScore(gameId)

Advanced box scores

Get advanced box score data

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

[**BoxScore**](BoxScore.md)

### Authorization

No authorization required

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
import {cfb} from 'cfb.js';

let apiInstance = new cfb.GamesApi();

let year = 56; // Number | Year filter

apiInstance.getCalendar(year).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

No authorization required

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
import {cfb} from 'cfb.js';

let apiInstance = new cfb.GamesApi();

let year = 56; // Number | Year filter

let opts = { 
  'week': 56, // Number | Week filter
  'seasonType': "seasonType_example", // String | Season type filter (regular, postseason, or both)
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
 **seasonType** | **String**| Season type filter (regular, postseason, or both) | [optional] 
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

Games and results

Get game results

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

Player game stats

Player stats broken down by game

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

Team game stats

Team stats broken down by game

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

Team records

Get team records by year

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

