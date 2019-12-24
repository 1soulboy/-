
function  strr(str,m,n){
    var strl="";
    for(var i=0;i<str.length;i++){
        if(i>=m){
            strl+=str[i];
        }
        if(i==n-1){
            break;
        }
    }
    return strl;
}
var m=1;
var n=6;
var str="helloworld";
console.log(strr(str,m,n));