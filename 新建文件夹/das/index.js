var server = require("ws").Server;

 var s = new server({port: 5001});

 s.on('connection',function (ws) {
   console.log('success');

   ws.on("message",function(msg){
    var wow=JSON.parse(msg);//把字符串转变为对象
    console.log(wow.data)

      if(msg.type=='name'){
        ws.useName=msg.data;
        return;
      }

     s.clients.forEach((item) => {
       if(item != ws){
        //把用户名还有用户发送的内容组合成字符串返回给每个客户端
         item.send(JSON.stringify({
          name:ws.useName,
          data:message.datas
         }));
      }
    })
 })
 })