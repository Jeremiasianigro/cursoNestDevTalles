// import { charmander } from './bases/03-classes'
// import { charmander } from './bases/04-injection'
// import { charmander } from './bases/05-decorators'
import { charmander } from './bases/06-decorators'
import './style.css'
// import { pokemons } from './bases/02-objects.ts'
// import { name, age } from './bases/01-types'

charmander

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1> Holaaa Capooo!!${charmander.name} ${charmander.id}</h1>

`

