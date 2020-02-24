# cfb.RankingsApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRankings**](RankingsApi.md#getRankings) | **GET** /rankings | Get historical rankings and polls


<a name="getRankings"></a>
# **getRankings**
> [RankingWeek] getRankings(year, opts)

Get historical rankings and polls

Poll rankings

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.RankingsApi();

let year = 56; // Number | Year/season filter for games

let opts = { 
  'week': 56, // Number | Week filter
  'seasonType': "regular" // String | Season type filter (regular or postseason)
};
apiInstance.getRankings(year, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

