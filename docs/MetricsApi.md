# cfb.MetricsApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGamePPA**](MetricsApi.md#getGamePPA) | **GET** /ppa/games | Get team game averages for Predicted Points Added (PPA)
[**getPlayerGamePPA**](MetricsApi.md#getPlayerGamePPA) | **GET** /ppa/players/games | Get player game averages for Predicted Points Added (PPA)
[**getPlayerSeasonPPA**](MetricsApi.md#getPlayerSeasonPPA) | **GET** /ppa/players/season | Get player season averages for Predicted Points Added (PPA)
[**getPredictedPoints**](MetricsApi.md#getPredictedPoints) | **GET** /ppa/predicted | Calculate Predicted Points
[**getPregameWinProbabilities**](MetricsApi.md#getPregameWinProbabilities) | **GET** /metrics/wp/pregame | Get pregame win probabilities
[**getTeamPPA**](MetricsApi.md#getTeamPPA) | **GET** /ppa/teams | Get team averages for Predicted Points Added (PPA)
[**getWinProbabilityData**](MetricsApi.md#getWinProbabilityData) | **GET** /metrics/wp | Get win probability chart data


<a name="getGamePPA"></a>
# **getGamePPA**
> [GamePPA] getGamePPA(year, opts)

Get team game averages for Predicted Points Added (PPA)

Predicted Points Added (PPA) by game

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.MetricsApi();

let year = 56; // Number | Year filter

let opts = { 
  'week': 56, // Number | Week filter
  'team': "team_example", // String | Team filter
  'conference': "conference_example", // String | Conference filter
  'excludeGarbageTime': true // Boolean | Filter to remove garbage time plays from calculations
};
apiInstance.getGamePPA(year, opts).then((data) => {
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
 **team** | **String**| Team filter | [optional] 
 **conference** | **String**| Conference filter | [optional] 
 **excludeGarbageTime** | **Boolean**| Filter to remove garbage time plays from calculations | [optional] 

### Return type

[**[GamePPA]**](GamePPA.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlayerGamePPA"></a>
# **getPlayerGamePPA**
> [PlayerGamePPA] getPlayerGamePPA(opts)

Get player game averages for Predicted Points Added (PPA)

Predicted Points Added (PPA) by player game

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.MetricsApi();

let opts = { 
  'year': 56, // Number | Year filter
  'week': 56, // Number | Week filter
  'team': "team_example", // String | Team filter
  'position': "position_example", // String | Position abbreviation filter
  'playerId': 56, // Number | Player id filter
  'threshold': "threshold_example", // String | Minimum play threshold filter
  'excludeGarbageTime': true // Boolean | Filter to remove garbage time plays from calculations
};
apiInstance.getPlayerGamePPA(opts).then((data) => {
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
 **position** | **String**| Position abbreviation filter | [optional] 
 **playerId** | **Number**| Player id filter | [optional] 
 **threshold** | **String**| Minimum play threshold filter | [optional] 
 **excludeGarbageTime** | **Boolean**| Filter to remove garbage time plays from calculations | [optional] 

### Return type

[**[PlayerGamePPA]**](PlayerGamePPA.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPlayerSeasonPPA"></a>
# **getPlayerSeasonPPA**
> [PlayerSeasonPPA] getPlayerSeasonPPA(opts)

Get player season averages for Predicted Points Added (PPA)

Predicted Points Added (PPA) by player season

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.MetricsApi();

let opts = { 
  'year': 56, // Number | Year filter
  'team': "team_example", // String | Team filter
  'conference': "conference_example", // String | Conference abbreviation filter
  'position': "position_example", // String | Position abbreviation filter
  'playerId': 56, // Number | Player id filter
  'threshold': "threshold_example", // String | Minimum play threshold filter
  'excludeGarbageTime': true // Boolean | Filter to remove garbage time plays from calculations
};
apiInstance.getPlayerSeasonPPA(opts).then((data) => {
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
 **position** | **String**| Position abbreviation filter | [optional] 
 **playerId** | **Number**| Player id filter | [optional] 
 **threshold** | **String**| Minimum play threshold filter | [optional] 
 **excludeGarbageTime** | **Boolean**| Filter to remove garbage time plays from calculations | [optional] 

### Return type

[**[PlayerSeasonPPA]**](PlayerSeasonPPA.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPredictedPoints"></a>
# **getPredictedPoints**
> [PredictedPoints] getPredictedPoints(down, distance)

Calculate Predicted Points

Predicted Points

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.MetricsApi();

let down = 56; // Number | Down filter

let distance = 56; // Number | Distance filter

apiInstance.getPredictedPoints(down, distance).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **down** | **Number**| Down filter | 
 **distance** | **Number**| Distance filter | 

### Return type

[**[PredictedPoints]**](PredictedPoints.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPregameWinProbabilities"></a>
# **getPregameWinProbabilities**
> [PregameWP] getPregameWinProbabilities(opts)

Get pregame win probabilities

Pregame win probabilities

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.MetricsApi();

let opts = { 
  'year': 56, // Number | Year filter
  'week': 56, // Number | Week filter
  'team': "team_example", // String | Team filter
  'seasonType': "seasonType_example" // String | regular or postseason
};
apiInstance.getPregameWinProbabilities(opts).then((data) => {
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
 **seasonType** | **String**| regular or postseason | [optional] 

### Return type

[**[PregameWP]**](PregameWP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamPPA"></a>
# **getTeamPPA**
> [TeamPPA] getTeamPPA(opts)

Get team averages for Predicted Points Added (PPA)

Predicted Points Added (PPA)

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.MetricsApi();

let opts = { 
  'year': 56, // Number | Year filter (required if team not specified)
  'team': "team_example", // String | Team filter (required if year not specified)
  'conference': "conference_example", // String | Conference filter
  'excludeGarbageTime': true // Boolean | Filter to remove garbage time plays from calculations
};
apiInstance.getTeamPPA(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter (required if team not specified) | [optional] 
 **team** | **String**| Team filter (required if year not specified) | [optional] 
 **conference** | **String**| Conference filter | [optional] 
 **excludeGarbageTime** | **Boolean**| Filter to remove garbage time plays from calculations | [optional] 

### Return type

[**[TeamPPA]**](TeamPPA.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWinProbabilityData"></a>
# **getWinProbabilityData**
> [PlayWP] getWinProbabilityData(gameId, opts)

Get win probability chart data

Win probability data

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.MetricsApi();

let gameId = 56; // Number | Game id filter

let opts = { 
  'adjustForSpread': true // Boolean | Toggles pregame spread adjustments
};
apiInstance.getWinProbabilityData(gameId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | **Number**| Game id filter | 
 **adjustForSpread** | **Boolean**| Toggles pregame spread adjustments | [optional] [default to true]

### Return type

[**[PlayWP]**](PlayWP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

