# cfb.VenuesApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVenues**](VenuesApi.md#getVenues) | **GET** /venues | Arena and venue information


<a name="getVenues"></a>
# **getVenues**
> [Venue] getVenues()

Arena and venue information

Venues

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.VenuesApi();
apiInstance.getVenues().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Venue]**](Venue.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

