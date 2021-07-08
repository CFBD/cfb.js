# cfb.DrivesApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDrives**](DrivesApi.md#getDrives) | **GET** /drives | Drive data and results


<a name="getDrives"></a>
# **getDrives**
> [Drive] getDrives(year, opts)

Drive data and results

Get game drives

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.DrivesApi();

var year = 56; // Number | Year filter

var opts = { 
  'seasonType': "regular", // String | Season type filter
  'week': 56, // Number | Week filter
  'team': "team_example", // String | Team filter
  'offense': "offense_example", // String | Offensive team filter
  'defense': "defense_example", // String | Defensive team filter
  'conference': "conference_example", // String | Conference filter
  'offenseConference': "offenseConference_example", // String | Offensive conference filter
  'defenseConference': "defenseConference_example" // String | Defensive conference filter
};
apiInstance.getDrives(year, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter | 
 **seasonType** | **String**| Season type filter | [optional] [default to regular]
 **week** | **Number**| Week filter | [optional] 
 **team** | **String**| Team filter | [optional] 
 **offense** | **String**| Offensive team filter | [optional] 
 **defense** | **String**| Defensive team filter | [optional] 
 **conference** | **String**| Conference filter | [optional] 
 **offenseConference** | **String**| Offensive conference filter | [optional] 
 **defenseConference** | **String**| Defensive conference filter | [optional] 

### Return type

[**[Drive]**](Drive.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

