var net=require('net');
var clientList=[];
// socket双向全双工实时的网络连接
var server=net.createServer(function (socket){
    clientList.push(socket);
    socket.write('success!\r\n');
    //socket.pipe(socket);
    socket.on('data',function(data){
        console.log(data.toString());
        // socket.write(data);
        broadcast(data);
    });
    socket.on('end',function(){
        // socket.write("end!");
        clientList=[];//当收到客户端发来的结束请求，将存放数据清空数组，相当于删除end，
                                  //阻止服务器结束连接，跟重启服务器同理
    });
});

function broadcast(data){
    for(var i=0;i<clientList.length;i++){
            clientList[i].write(data);
    }
}
server.listen(1337,   '127.0.0.1');