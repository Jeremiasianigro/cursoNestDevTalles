import {Manager, Socket} from 'socket.io-client'

export const connectToServer = ()=> {

    const manager = new Manager('http://localhost:3000/socket.io/socket.io.js')


    //coneccion al namespace
   const socket = manager.socket('/');

    addListeners(socket);

}

const addListeners = (socket: Socket) => {

    const serverStatusLabel = document.querySelector('#server-status')!;
    const clientsUl = document.querySelector('#clients-ul')!;
    const messageForm  = document.querySelector<HTMLFormElement>('#message-form')!;
    const messageInput = document.querySelector<HTMLInputElement>('#message-input')!;


    socket.on('connect', ()=>{
        serverStatusLabel.innerHTML = 'connected'
    })

    socket.on('disconnect', ()=>{
        serverStatusLabel.innerHTML = 'disconnected'
    })

    socket.on('clients-updated', (clients: string[])=>{
        let clientHtml = '';
        clients.forEach(clientId => {
            clientHtml += `
            <li>cliente: ${clientId}</li>
              `    
        });

        clientsUl.innerHTML = clientHtml;
    })

    messageForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        if( messageInput.value.trim().length <=0) return;

       socket.emit('message-from-client', {
        id: 'Yo', 
        message: messageInput.value
       });
       messageInput.value = '';

    })


}