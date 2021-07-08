# cfb.RankingsApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRankings**](RankingsApi.md#getRankings) | **GET** /rankings | Historical polls and rankings


<a name="getRankings"></a>
# **getRankings**
> [RankingWeek] getRankings(year, opts)

Historical polls and rankings

Poll rankings

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.RankingsApi();

var year = 56; // Number | Year/season filter for games

var opts = { 
  'week': 56, // Number | Week filter
  'seasonType': "regular" // String | Season type filter (regular or postseason)
};
apiInstance.getRankings(year, opts).then(function(data) {
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

### Return type

[**[RankingWeek]**](RankingWeek.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

