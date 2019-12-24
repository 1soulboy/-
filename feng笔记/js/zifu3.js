//将数组按指定格式转化为字符串
function str(arr,type){
    var strr="";
    for(var i=0;i<arr.length;i++){
        if(i==0){
            strr=arr[i];
        }else{
            strr+=type+arr[i];
        }
    }
    return strr;
}
var array=["he","llo","wo","r","l","d"];
console.log(str(array,"*"));
