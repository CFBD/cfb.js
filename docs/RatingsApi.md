# cfb.RatingsApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConferenceSPRatings**](RatingsApi.md#getConferenceSPRatings) | **GET** /ratings/sp/conferences | Get average SP+ historical rating data by conference
[**getSPRatings**](RatingsApi.md#getSPRatings) | **GET** /ratings/sp | Get SP+ historical rating data (requires either a year or team specified)
[**getSRSRatings**](RatingsApi.md#getSRSRatings) | **GET** /ratings/srs | Get SRS historical rating data (requires either a year or team specified)


<a name="getConferenceSPRatings"></a>
# **getConferenceSPRatings**
> [ConferenceSPRating] getConferenceSPRatings(opts)

Get average SP+ historical rating data by conference

Conference average SP+ ratings by year

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.RatingsApi();

let opts = { 
  'year': 56, // Number | Season filter
  'conference': "conference_example" // String | Conference abbreviation filter
};
apiInstance.getConferenceSPRatings(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSPRatings"></a>
# **getSPRatings**
> [TeamSPRating] getSPRatings(opts)

Get SP+ historical rating data (requires either a year or team specified)

SP+ rating data

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.RatingsApi();

let opts = { 
  'year': 56, // Number | Season filter (required if team not specified)
  'team': "team_example" // String | Team filter (required if year not specified)
};
apiInstance.getSPRatings(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSRSRatings"></a>
# **getSRSRatings**
> [TeamSRSRating] getSRSRatings(opts)

Get SRS historical rating data (requires either a year or team specified)

SRS rating data

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.RatingsApi();

let opts = { 
  'year': 56, // Number | Season filter (required if team not specified)
  'team': "team_example", // String | Team filter (required if year not specified)
  'conference': "conference_example" // String | Conference filter
};
apiInstance.getSRSRatings(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

