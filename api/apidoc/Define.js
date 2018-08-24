/**
@apiDefine Authorzie
@apiHeader {String="Bearer 5LJGaAGttE4KcpyfY6ctvfKOofZCzpvS/L+Dl1q+vNQ="} authorization Bearer token authorize by useing sha256 to encryption(client_id+client_secret)
@apiHeader {String} model Device name
@apiHeader {String} session-id Device Id.
@apiHeader {String} os-version device os version.
@apiHeaderExample {json} Header-Example:
{
    "authorization": "Bearer 64360462db335e8157e3def029959eb6dc7fe3075639790b3ff530cd6eb3bd8a",
    "session-id": "hwG620-L72",
    "model": "HUAWEI G620-L72 (G620-L72)",
    "os-version": "3.4.0-g04ada23(C428B152)"
}
*/
/**
 * 
@apiDefine AuthEndPoint
@apiHeader {String="Bearer $2a$10$FMTJr/oDp93I3VsYlXE4zObd90FCS63azugEJob6GOUsnznXYPNrS"} token Bearer token authorize by useing sha256 to encryption(client_id+client_secret)
@apiHeader {String} model Device name
@apiHeader {String} session-id Device Id.
@apiHeader {String} os-version device os version.
@apiHeaderExample {json} Header-Example:
{
    "token": "Bearer $2a$10$FMTJr/oDp93I3VsYlXE4zObd90FCS63azugEJob6GOUsnznXYPNrS",
    "session-id": "123456",
    "model": "web",
    "os-version": "web"
}
*/
/**
@apiDefine AuthAccessToken
@apiHeader {String="Bearer $2a$10$GeRuSbRSIsETKVQxB/w5leFMGqoDFv0SflH/9sSxab4OYKg1RvTca"} Access-Token Bearer User Access Token
@apiHeader {String} model Device name
@apiHeader {String} session-id Device Id.
@apiHeader {String} os-version device os version.
@apiHeaderExample {json} Header-Example:
{
    "access-token": "Bearer $2a$10$GeRuSbRSIsETKVQxB/w5leFMGqoDFv0SflH/9sSxab4OYKg1RvTca",
    "session-id": "123",
    "model": "web",
    "os-version": "3.4.0-g04ada23(C428B152)"
}
*/
