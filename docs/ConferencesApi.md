# cfb.ConferencesApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConferences**](ConferencesApi.md#getConferences) | **GET** /conferences | Conferences


<a name="getConferences"></a>
# **getConferences**
> [Conference] getConferences()

Conferences

Get conference list

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.ConferencesApi();
apiInstance.getConferences().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Conference]**](Conference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

