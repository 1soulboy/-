//搜索字符串
function  sou(str,m){
    var arr=[];
    for(var i=0;i<str.length;i++){
        var n=i;
        var  j='';
        for(var k=0;k<m.length;k++){
        if(m[k]==str[n]){
            j+=str[n++];
            if(j==m){
                // console.log(i);
                arr.push(i)

            }
        }
    }
}
return arr;
}
var str="hellorworld";
var m="wor";
console.log( sou(str,m));
