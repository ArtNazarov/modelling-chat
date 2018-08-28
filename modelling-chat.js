//Моделирование чата

var messages = [];

// Сообщения

var Clients = [
{id: "Питер", data : ['Привет', 'Хорошая погода']},
{id: "Анна", data : ['Хай', 'Супер чат']},
{id: "Эльза", data : ['hi!', 'Со мной такая история случилась!']}
]

// Сервер

function Server(req){
 
  switch (req.command){
      case "msg" : { console.log('msg>'); return messages.join("<br/>"); break; }
      case "new"  : { console.log('>new'); messages.push(req.msg); return ""; break; }
  }

}

//Клиент

function Client(index){

   var msg = Clients[index].data.shift(); 
   console.log('Await messages:',Clients[index].data.length);
   console.log(Clients[index]);
   Server({command:'new', msg: Clients[index].id + ':' + msg});
   onMessage();
   
   if (Clients[index].data.length>0){
   setTimeout( Chat(index) , Math.floor(2000*Math.random())+3000);
   }

};



var onMessage = function() { 
document.body.innerHTML='';
document.write( Server({command:"msg"}) ); 
};

var Chat = function(k){
  return function(){
  console.log(Clients[k]);
    Client(k);
  }
}

var Modelling = function(){ 
for (var k=0; k<Clients.length;k++){
  console.log(Clients[k].data);
  setTimeout( Chat(k) , Math.floor(2000*Math.random())+3000); 
}
}




