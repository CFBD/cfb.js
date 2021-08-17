# cfb.TeamsApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFbsTeams**](TeamsApi.md#getFbsTeams) | **GET** /teams/fbs | FBS team list
[**getRoster**](TeamsApi.md#getRoster) | **GET** /roster | Team rosters
[**getTalent**](TeamsApi.md#getTalent) | **GET** /talent | Team talent composite rankings
[**getTeamMatchup**](TeamsApi.md#getTeamMatchup) | **GET** /teams/matchup | Team matchup history
[**getTeams**](TeamsApi.md#getTeams) | **GET** /teams | Team information


<a name="getFbsTeams"></a>
# **getFbsTeams**
> [Team] getFbsTeams(opts)

FBS team list

Information on major division teams

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.TeamsApi();

var opts = { 
  'year': 56 // Number | Year filter
};
apiInstance.getFbsTeams(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter | [optional] 

### Return type

[**[Team]**](Team.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRoster"></a>
# **getRoster**
> [Player] getRoster(opts)

Team rosters

Roster data

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.TeamsApi();

var opts = { 
  'team': "team_example", // String | Team name
  'year': 56 // Number | Season year
};
apiInstance.getRoster(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team** | **String**| Team name | [optional] 
 **year** | **Number**| Season year | [optional] 

### Return type

[**[Player]**](Player.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTalent"></a>
# **getTalent**
> [TeamTalent] getTalent(opts)

Team talent composite rankings

Team talent composite

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.TeamsApi();

var opts = { 
  'year': 56 // Number | Year filter
};
apiInstance.getTalent(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Year filter | [optional] 

### Return type

[**[TeamTalent]**](TeamTalent.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamMatchup"></a>
# **getTeamMatchup**
> TeamMatchup getTeamMatchup(team1, team2, opts)

Team matchup history

Matchup history

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.TeamsApi();

var team1 = "team1_example"; // String | First team

var team2 = "team2_example"; // String | Second team

var opts = { 
  'minYear': 56, // Number | Minimum year
  'maxYear': 56 // Number | Maximum year
};
apiInstance.getTeamMatchup(team1, team2, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team1** | **String**| First team | 
 **team2** | **String**| Second team | 
 **minYear** | **Number**| Minimum year | [optional] 
 **maxYear** | **Number**| Maximum year | [optional] 

### Return type

[**TeamMatchup**](TeamMatchup.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeams"></a>
# **getTeams**
> [Team] getTeams(opts)

Team information

Get team information

### Example
```javascript
var cfb = require('cfb.js');
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new cfb.TeamsApi();

var opts = { 
  'conference': "conference_example" // String | Conference abbreviation filter
};
apiInstance.getTeams(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conference** | **String**| Conference abbreviation filter | [optional] 

### Return type

[**[Team]**](Team.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

