# cfb.StatsApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAdvancedTeamGameStats**](StatsApi.md#getAdvancedTeamGameStats) | **GET** /stats/game/advanced | Get advanced game team stats
[**getAdvancedTeamSeasonStats**](StatsApi.md#getAdvancedTeamSeasonStats) | **GET** /stats/season/advanced | Get advanced season team stats
[**getStatCategories**](StatsApi.md#getStatCategories) | **GET** /stats/categories | Get stat category list
[**getTeamSeasonStats**](StatsApi.md#getTeamSeasonStats) | **GET** /stats/season | Get season team stats


<a name="getAdvancedTeamGameStats"></a>
# **getAdvancedTeamGameStats**
> [AdvancedGameStat] getAdvancedTeamGameStats(opts)

Get advanced game team stats

Advanced team game stats

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.StatsApi();

let opts = { 
  'year': 56, // Number | Year filter (required if no team specified)
  'week': 56, // Number | Week filter
  'team': "team_example", // String | Team filter (required if no year specified)
  'opponent': "opponent_example", // String | Opponent filter
  'excludeGarbageTime': true, // Boolean | Filter to remove garbage time plays from calculations
  'seasonType': "seasonType_example" // String | Season type filter (regular, postseason, or both)
};
apiInstance.getAdvancedTeamGameStats(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter (required if no team specified) | [optional] 
 **week** | **Number**| Week filter | [optional] 
 **team** | **String**| Team filter (required if no year specified) | [optional] 
 **opponent** | **String**| Opponent filter | [optional] 
 **excludeGarbageTime** | **Boolean**| Filter to remove garbage time plays from calculations | [optional] 
 **seasonType** | **String**| Season type filter (regular, postseason, or both) | [optional] 

### Return type

[**[AdvancedGameStat]**](AdvancedGameStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAdvancedTeamSeasonStats"></a>
# **getAdvancedTeamSeasonStats**
> [AdvancedSeasonStat] getAdvancedTeamSeasonStats(opts)

Get advanced season team stats

Advanced team season stats

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.StatsApi();

let opts = { 
  'year': 56, // Number | Year filter (required if no team specified)
  'team': "team_example", // String | Team filter (required if no year specified)
  'excludeGarbageTime': true, // Boolean | Filter to remove garbage time plays from calculations
  'startWeek': 56, // Number | Starting week filter
  'endWeek': 56 // Number | Starting week filter
};
apiInstance.getAdvancedTeamSeasonStats(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter (required if no team specified) | [optional] 
 **team** | **String**| Team filter (required if no year specified) | [optional] 
 **excludeGarbageTime** | **Boolean**| Filter to remove garbage time plays from calculations | [optional] 
 **startWeek** | **Number**| Starting week filter | [optional] 
 **endWeek** | **Number**| Starting week filter | [optional] 

### Return type

[**[AdvancedSeasonStat]**](AdvancedSeasonStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStatCategories"></a>
# **getStatCategories**
> ['String'] getStatCategories()

Get stat category list

Stat category list

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.StatsApi();
apiInstance.getStatCategories().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**['String']**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamSeasonStats"></a>
# **getTeamSeasonStats**
> [TeamSeasonStat] getTeamSeasonStats(opts)

Get season team stats

Team season stats

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.StatsApi();

let opts = { 
  'year': 56, // Number | Year filter (required if no team specified)
  'team': "team_example", // String | Team filter (required if no year specified)
  'conference': "conference_example", // String | Conference abbreviation filter
  'startWeek': 56, // Number | Starting week filter
  'endWeek': 56 // Number | Starting week filter
};
apiInstance.getTeamSeasonStats(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter (required if no team specified) | [optional] 
 **team** | **String**| Team filter (required if no year specified) | [optional] 
 **conference** | **String**| Conference abbreviation filter | [optional] 
 **startWeek** | **Number**| Starting week filter | [optional] 
 **endWeek** | **Number**| Starting week filter | [optional] 

### Return type

[**[TeamSeasonStat]**](TeamSeasonStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

