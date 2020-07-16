# cfb.DrivesApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDrvies**](DrivesApi.md#getDrvies) | **GET** /drives | Drive data and results


<a name="getDrvies"></a>
# **getDrvies**
> [Drive] getDrvies(year, opts)

Drive data and results

Get game drives

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.DrivesApi();

let year = 56; // Number | Year filter

let opts = { 
  'seasonType': "regular", // String | Season type filter
  'week': 56, // Number | Week filter
  'team': "team_example", // String | Team filter
  'offense': "offense_example", // String | Offensive team filter
  'defense': "defense_example", // String | Defensive team filter
  'conference': "conference_example", // String | Conference filter
  'offenseConference': "offenseConference_example", // String | Offensive conference filter
  'defenseConference': "defenseConference_example" // String | Defensive conference filter
};
apiInstance.getDrvies(year, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

