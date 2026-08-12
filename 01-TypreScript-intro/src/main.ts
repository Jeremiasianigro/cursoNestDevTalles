import './style.css'
import { bulbasour } from './bases/02-objects.ts'
// import { name, age } from './bases/01-types'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1> Holaaa Capooo ${bulbasour.name}!!</h1>

`


