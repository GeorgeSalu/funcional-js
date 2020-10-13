const {ajax} = require('rxjs/ajax')
const {map, concatAll} = require('rxjs/operators')

ajax({
  url: 'https://api.github.com/users/cod3rcursos/repos'
})
.pipe(

)
.subscribe(console.log)
