# cfb.VenuesApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVenues**](VenuesApi.md#getVenues) | **GET** /venues | Get venue information


<a name="getVenues"></a>
# **getVenues**
> [Venue] getVenues()

Get venue information

Venues

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.VenuesApi();
apiInstance.getVenues().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Venue]**](Venue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

