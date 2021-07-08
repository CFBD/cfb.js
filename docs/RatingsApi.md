# cfb.RatingsApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConferenceSPRatings**](RatingsApi.md#getConferenceSPRatings) | **GET** /ratings/sp/conferences | Historical SP+ ratings by conference
[**getSPRatings**](RatingsApi.md#getSPRatings) | **GET** /ratings/sp | Historical SP+ ratings
[**getSRSRatings**](RatingsApi.md#getSRSRatings) | **GET** /ratings/srs | Historical SRS ratings


<a name="getConferenceSPRatings"></a>
# **getConferenceSPRatings**
> [ConferenceSPRating] getConferenceSPRatings(opts)

Historical SP+ ratings by conference

Get average SP+ historical rating data by conference

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.RatingsApi();

var opts = { 
  'year': 56, // Number | Season filter
  'conference': "conference_example" // String | Conference abbreviation filter
};
apiInstance.getConferenceSPRatings(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Season filter | [optional] 
 **conference** | **String**| Conference abbreviation filter | [optional] 

### Return type

[**[ConferenceSPRating]**](ConferenceSPRating.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSPRatings"></a>
# **getSPRatings**
> [TeamSPRating] getSPRatings(opts)

Historical SP+ ratings

SP+ rating data

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.RatingsApi();

var opts = { 
  'year': 56, // Number | Season filter (required if team not specified)
  'team': "team_example" // String | Team filter (required if year not specified)
};
apiInstance.getSPRatings(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Season filter (required if team not specified) | [optional] 
 **team** | **String**| Team filter (required if year not specified) | [optional] 

### Return type

[**[TeamSPRating]**](TeamSPRating.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSRSRatings"></a>
# **getSRSRatings**
> [TeamSRSRating] getSRSRatings(opts)

Historical SRS ratings

SRS rating data (requires either a year or team specified)

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.RatingsApi();

var opts = { 
  'year': 56, // Number | Season filter (required if team not specified)
  'team': "team_example", // String | Team filter (required if year not specified)
  'conference': "conference_example" // String | Conference filter
};
apiInstance.getSRSRatings(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Season filter (required if team not specified) | [optional] 
 **team** | **String**| Team filter (required if year not specified) | [optional] 
 **conference** | **String**| Conference filter | [optional] 

### Return type

[**[TeamSRSRating]**](TeamSRSRating.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

