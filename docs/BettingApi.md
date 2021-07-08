# cfb.BettingApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLines**](BettingApi.md#getLines) | **GET** /lines | Betting lines


<a name="getLines"></a>
# **getLines**
> [GameLines] getLines(opts)

Betting lines

Closing betting lines

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.BettingApi();

var opts = { 
  'gameId': 56, // Number | Game id filter
  'year': 56, // Number | Year/season filter for games
  'week': 56, // Number | Week filter
  'seasonType': "regular", // String | Season type filter (regular or postseason)
  'team': "team_example", // String | Team
  'home': "home_example", // String | Home team filter
  'away': "away_example", // String | Away team filter
  'conference': "conference_example" // String | Conference abbreviation filter
};
apiInstance.getLines(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

