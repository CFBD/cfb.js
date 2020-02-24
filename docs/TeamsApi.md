# cfb.TeamsApi

All URIs are relative to *https://api.collegefootballdata.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFbsTeams**](TeamsApi.md#getFbsTeams) | **GET** /teams/fbs | Get list of major division teams for a given year
[**getRoster**](TeamsApi.md#getRoster) | **GET** /roster | Get team roster
[**getTalent**](TeamsApi.md#getTalent) | **GET** /talent | Get team talent rankings
[**getTeamMatchup**](TeamsApi.md#getTeamMatchup) | **GET** /teams/matchup | Get matchup history
[**getTeams**](TeamsApi.md#getTeams) | **GET** /teams | Get team information


<a name="getFbsTeams"></a>
# **getFbsTeams**
> [Team] getFbsTeams(opts)

Get list of major division teams for a given year

Information on major division teams

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.TeamsApi();

let opts = { 
  'year': 56 // Number | Year filter
};
apiInstance.getFbsTeams(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRoster"></a>
# **getRoster**
> [Player] getRoster(team, opts)

Get team roster

Roster data

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.TeamsApi();

let team = "team_example"; // String | Team name

let opts = { 
  'year': 56 // Number | Season year
};
apiInstance.getRoster(team, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team** | **String**| Team name | 
 **year** | **Number**| Season year | [optional] 

### Return type

[**[Player]**](Player.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTalent"></a>
# **getTalent**
> [TeamTalent] getTalent(opts)

Get team talent rankings

Team talent composite

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.TeamsApi();

let opts = { 
  'year': 56 // Number | Year filter
};
apiInstance.getTalent(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamMatchup"></a>
# **getTeamMatchup**
> [TeamMatchup] getTeamMatchup(team1, team2, opts)

Get matchup history

Matchup history

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.TeamsApi();

let team1 = "team1_example"; // String | First team

let team2 = "team2_example"; // String | Second team

let opts = { 
  'minYear': 56, // Number | Minimum year
  'maxYear': 56 // Number | Maximum year
};
apiInstance.getTeamMatchup(team1, team2, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

[**[TeamMatchup]**](TeamMatchup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeams"></a>
# **getTeams**
> [Team] getTeams(opts)

Get team information

Team information

### Example
```javascript
import {cfb} from 'cfb.js';

let apiInstance = new cfb.TeamsApi();

let opts = { 
  'conference': "conference_example" // String | Conference abbreviation filter
};
apiInstance.getTeams(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

