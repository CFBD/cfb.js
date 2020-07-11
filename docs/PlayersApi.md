# cfb.PlayersApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPlayerSeasonStats**](PlayersApi.md#getPlayerSeasonStats) | **GET** /stats/player/season | Get player stats aggregated by season
[**getPlayerUsage**](PlayersApi.md#getPlayerUsage) | **GET** /player/usage | Get player usage metrics for the season
[**getReturningProduction**](PlayersApi.md#getReturningProduction) | **GET** /player/returning | Get returning production metrics
[**playerSearch**](PlayersApi.md#playerSearch) | **GET** /player/search | Search for players


<a name="getPlayerSeasonStats"></a>
# **getPlayerSeasonStats**
> [PlayerSeasonStat] getPlayerSeasonStats(year, opts)

Get player stats aggregated by season

Season player stats

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.PlayersApi();

let year = 56; // Number | Year filter

let opts = { 
  'team': "team_example", // String | Team filter
  'conference': "conference_example", // String | Conference abbreviation filter
  'startWeek': 56, // Number | Start week filter
  'endWeek': 56, // Number | Start week filter
  'seasonType': "seasonType_example", // String | Season type filter (regular, postseason, or both)
  'category': "category_example" // String | Start category filter (e.g. passing)
};
apiInstance.getPlayerSeasonStats(year, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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
 **category** | **String**| Start category filter (e.g. passing) | [optional] 

### Return type

[**[PlayerSeasonStat]**](PlayerSeasonStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlayerUsage"></a>
# **getPlayerUsage**
> [PlayerUsage] getPlayerUsage(year, opts)

Get player usage metrics for the season

Player usage metrics by season

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.PlayersApi();

let year = 2019; // Number | Year filter

let opts = { 
  'team': "team_example", // String | Team filter
  'conference': "conference_example", // String | Conference abbreviation filter
  'position': "position_example", // String | Position abbreviation filter
  'playerId': 56, // Number | Player id filter
  'excludeGarbageTime': true // Boolean | Filter to remove garbage time plays from calculations
};
apiInstance.getPlayerUsage(year, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter | [default to 2019]
 **team** | **String**| Team filter | [optional] 
 **conference** | **String**| Conference abbreviation filter | [optional] 
 **position** | **String**| Position abbreviation filter | [optional] 
 **playerId** | **Number**| Player id filter | [optional] 
 **excludeGarbageTime** | **Boolean**| Filter to remove garbage time plays from calculations | [optional] 

### Return type

[**[PlayerUsage]**](PlayerUsage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReturningProduction"></a>
# **getReturningProduction**
> [ReturningProduction] getReturningProduction(opts)

Get returning production metrics

Returning production metrics

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.PlayersApi();

let opts = { 
  'year': 56, // Number | Year filter
  'team': "team_example", // String | Team filter
  'conference': "conference_example" // String | Conference abbreviation filter
};
apiInstance.getReturningProduction(opts).then((data) => {
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
 **conference** | **String**| Conference abbreviation filter | [optional] 

### Return type

[**[ReturningProduction]**](ReturningProduction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="playerSearch"></a>
# **playerSearch**
> [PlayerSearchResult] playerSearch(searchTerm, opts)

Search for players

Search for players

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.PlayersApi();

let searchTerm = "searchTerm_example"; // String | Term to search on

let opts = { 
  'position': "position_example", // String | Position abbreviation filter
  'team': "team_example", // String | Team filter
  'year': 56 // Number | Year filter
};
apiInstance.playerSearch(searchTerm, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

