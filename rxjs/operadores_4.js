const {from, Observable} = require('rxjs')

function primeiro() {

}

from([1,2,3,4,5])
  .pipe()
  .subscribe(console.log)