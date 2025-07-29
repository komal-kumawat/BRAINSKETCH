import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});
wss.on("connection",function connection(ws){
    wss.on("error" , console.error);
    wss.on('message',(data)=>{
        console.log("recieved: %s",data);
        ws.send("sent");
    });
    
});