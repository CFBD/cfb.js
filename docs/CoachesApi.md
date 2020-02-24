# cfb.CoachesApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCoaches**](CoachesApi.md#getCoaches) | **GET** /coaches | Get coach records and school history


<a name="getCoaches"></a>
# **getCoaches**
> InlineResponse200 getCoaches(opts)

Get coach records and school history

Coaching history

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.CoachesApi();

let opts = { 
  'firstName': "firstName_example", // String | First name filter
  'lastName': "lastName_example", // String | Last name filter
  'team': "team_example", // String | Team name filter
  'year': 56, // Number | Year filter
  'minYear': 56, // Number | Minimum year filter (inclusive)
  'maxYear': 56 // Number | Maximum year filter (inclusive)
};
apiInstance.getCoaches(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

