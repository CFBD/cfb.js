# cfb.CoachesApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCoaches**](CoachesApi.md#getCoaches) | **GET** /coaches | Coaching records and history


<a name="getCoaches"></a>
# **getCoaches**
> [Coach] getCoaches(opts)

Coaching records and history

Coaching history

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.CoachesApi();

var opts = { 
  'firstName': "firstName_example", // String | First name filter
  'lastName': "lastName_example", // String | Last name filter
  'team': "team_example", // String | Team name filter
  'year': 56, // Number | Year filter
  'minYear': 56, // Number | Minimum year filter (inclusive)
  'maxYear': 56 // Number | Maximum year filter (inclusive)
};
apiInstance.getCoaches(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firstName** | **String**| First name filter | [optional] 
 **lastName** | **String**| Last name filter | [optional] 
 **team** | **String**| Team name filter | [optional] 
 **year** | **Number**| Year filter | [optional] 
 **minYear** | **Number**| Minimum year filter (inclusive) | [optional] 
 **maxYear** | **Number**| Maximum year filter (inclusive) | [optional] 

### Return type

[**[Coach]**](Coach.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

