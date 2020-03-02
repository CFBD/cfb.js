# cfb.PlaysApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPlayStatTypes**](PlaysApi.md#getPlayStatTypes) | **GET** /play/stat/types | Get play stat type lists
[**getPlayStats**](PlaysApi.md#getPlayStats) | **GET** /play/stats | Get play statistics
[**getPlayTypes**](PlaysApi.md#getPlayTypes) | **GET** /play/types | Get play type list
[**getPlays**](PlaysApi.md#getPlays) | **GET** /plays | Get play information. Requires either a week or team to be specified.


<a name="getPlayStatTypes"></a>
# **getPlayStatTypes**
> [PlayStatType] getPlayStatTypes()

Get play stat type lists

Type of play stats

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.PlaysApi();
apiInstance.getPlayStatTypes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PlayStatType]**](PlayStatType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlayStats"></a>
# **getPlayStats**
> [PlayStat] getPlayStats(opts)

Get play statistics

Gets player stats associated by play (limit 1000)

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.PlaysApi();

let opts = { 
  'year': 56, // Number | Year filter
  'week': 56, // Number | Week filter
  'team': "team_example", // String | Team filter
  'gameId': 56, // Number | gameId filter (from /games endpoint)
  'athleteId': 56, // Number | athleteId filter (from /roster endpoint)
  'statTypeId': 56, // Number | statTypeId filter (from /play/stat/types endpoint)
  'seasonType': "seasonType_example" // String | regular, postseason, or both
};
apiInstance.getPlayStats(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

### Return type

[**[PlayStat]**](PlayStat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlayTypes"></a>
# **getPlayTypes**
> [PlayType] getPlayTypes()

Get play type list

Types of plays

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.PlaysApi();
apiInstance.getPlayTypes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PlayType]**](PlayType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlays"></a>
# **getPlays**
> [Play] getPlays(year, opts)

Get play information. Requires either a week or team to be specified.

Play results

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.PlaysApi();

let year = 56; // Number | Year filter

let opts = { 
  'seasonType': "regular", // String | Season type filter
  'week': 56, // Number | Week filter (required if team, offense, or defense, not specified)
  'team': "team_example", // String | Team filter
  'offense': "offense_example", // String | Offensive team filter
  'defense': "defense_example", // String | Defensive team filter
  'conference': "conference_example", // String | Conference filter
  'offenseConference': "offenseConference_example", // String | Offensive conference filter
  'defenseConference': "defenseConference_example", // String | Defensive conference filter
  'playType': 56 // Number | Play type filter
};
apiInstance.getPlays(year, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter | 
 **seasonType** | **String**| Season type filter | [optional] [default to regular]
 **week** | **Number**| Week filter (required if team, offense, or defense, not specified) | [optional] 
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

