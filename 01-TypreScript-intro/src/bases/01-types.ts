export let name: string = 'Jere';
export const age: number = 40
export const isValid: boolean = true;

export const templateString = `Esto es un string
multilinea
que puede tener 
" dobles
' simples
inyectar valores ${ name}
expresiones ${1 + 1 }
números ${age}
booleanes ${isValid}`

console.log(templateString)