# cfb.BettingApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLines**](BettingApi.md#getLines) | **GET** /lines | Get betting line information


<a name="getLines"></a>
# **getLines**
> [GameLines] getLines(opts)

Get betting line information

Closing betting lines

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.BettingApi();

let opts = { 
  'gameId': 56, // Number | Game id filter
  'year': 56, // Number | Year/season filter for games
  'week': 56, // Number | Week filter
  'seasonType': "regular", // String | Season type filter (regular or postseason)
  'team': "team_example", // String | Team
  'home': "home_example", // String | Home team filter
  'away': "away_example", // String | Away team filter
  'conference': "conference_example" // String | Conference abbreviation filter
};
apiInstance.getLines(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | **Number**| Game id filter | [optional] 
 **year** | **Number**| Year/season filter for games | [optional] 
 **week** | **Number**| Week filter | [optional] 
 **seasonType** | **String**| Season type filter (regular or postseason) | [optional] [default to regular]
 **team** | **String**| Team | [optional] 
 **home** | **String**| Home team filter | [optional] 
 **away** | **String**| Away team filter | [optional] 
 **conference** | **String**| Conference abbreviation filter | [optional] 

### Return type

[**[GameLines]**](GameLines.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

