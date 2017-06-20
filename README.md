### Status
[![Build Status](https://travis-ci.org/FDAWES/active-access-app.png)](https://travis-ci.org/FDAWES/active-access-app)
## active-access-app

Provides a passthrough to the Active Access api.

Created for use on a project requiring AJAX access to the Active Access API.

### Use

Use the same exact URL as with Active Access, only with `https://active-access-app.herokuapp.com` prepended in place of `http://api.amp.active.com`.


You still need an `api_key`!

### Example

```js
var url = "https://active-access-app.herokuapp.com/v2/search?{queryString params}&api_key={key}",

//jQuery's ajax function
$.ajax({
	url: url,
	method: "GET"
}).done(function(res){
	console.log(res);
})

```
