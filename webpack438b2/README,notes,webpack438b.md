
# 438b

2019-01-15 12:23PM


## article


https://itnext.io/webpack-from-0-to-automated-testing-4634844d5c3c


_____________

## Notes

```
at: 

  sftp://david462.tk:46271/srv/dkr/vue435s/
    
```

git clone https://github.com/dgleba/webpack438b.git


npm install

npm run build

http://192.168.88.42:3008/webpack438b/


----------------------------------------------------


----------------------------------------------------
Title:  .
-----------------------2019-01-15[Jan-Tue]12-37PM

```
import $ from "jQuery";

should be..

import $ from "jquery";

```
```

  "devDependencies": {
    "jquery": "^3.3.1",
  }

```
_____________

```
albe@vamp398:/srv/dkr/vue435s/webpack438b$ npm run build

> webpack-mocha-tutorial@1.0.0 build /srv/dkr/vue435s/webpack438b
> webpack

ERROR in ./app/src/page.js
Module not found: Error: Can't resolve 'jQuery' in '/srv/dkr/vue435s/webpack438b/app/src'
 @ ./app/src/page.js 5:14-31
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! webpack-mocha-tutorial@1.0.0 build: `webpack`
npm ERR! Exit status 2
npm ERR! A complete log of this run can be found in:
npm ERR!     /home/albe/.npm/_logs/2019-01-15T17_34_40_844Z-debug.log
albe@vamp398:/srv/dkr/vue435s/webpack438b$
```

----------------------------------------------------
