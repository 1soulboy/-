function  sliptl(str,type){
    var arr=[];
    var j=0;
    var  str1="";
    for(i=0;i<str.length;i++){
            if(str[i]==type){
                    arr[j]=str1;
                    j++;
                    str1="";
            }else{
                str1+=str[i];
            }if(str[i+1]==undefined){
                arr[j]=str1;
            }
    }
    return arr;
}
var str="he,llo,wo,rld";
var type=",";
console.log(sliptl(str,type));