
function  zong(graph,a,n,t,b){
//正方形
if(graph==0){
    for(var i=0;i<=a;i++){
        var str="";
              str+=t;
    for(var j=0;j<=a-1;j++){
            if(b==1){
                str+=' '+t;
         }
            if(b==0){
            if(i==0||i==a||j==a-1){
                str+=' '+t;
        }else{
                str+="  ";
                }
        }
                }
                console.log(str);
    }
}
//三角形
if(graph==1){
        for(var i=0;i<=a;i++){
                var str="";
                for(var j=a;j>=i;j--){
                        str+=" ";
                }
               for(var k=1;k<=2*i+1;k++){
                if(b==1){
                        str+=" "+t;
                }
                if(b==0){
                        if(k==1||k==2*i+1||j==a-1){
                                str+=" "+t;
                        }else{
                                str+="  ";
                        }
                }
               } 
               console.log(str);
          }
}
//菱形
if(graph==2){
    for(var i=0;i<=a;i++){
        var str="";
        for(var j=a;j>=i;j--){
                str+="  ";
        }
       for(var k=1;k<=2*i+1;k++){
        if(b==1){
                str+=" "+t;
        }
        if(b==0){
                if(k==1||k==2*i){
                        str+=" "+t;
                }else{
                        str+=" ";
                }
        }
       } 
       console.log(str);
  }
  for(var i=a-1;i>=0;i--){
            var str="";
            for(var j=a;j>=i;j--){
                str+="  ";
            }
            for(var k=1;k<=2*i+1;k++){
                if(b==1){
                    str+=" "+t;
            }
            if(b==0){
                    if(k==1||k==2*i){
                            str+=" "+t;
                    }else{
                            str+=" ";
                    }
            }
  }
  console.log(str);
  }
}
//梯形
if(graph==3){
    for(var i=n;i<=a;i++){
        var str="";
        for(var j=a;j>=i;j--){
                str+="  ";
        }
       for(var k=1;k<=2*i+1;k++){
        if(b==1){
                str+=" "+t;
        }
        if(b==0){
                if(k==1||k==2*i+1||j==a-1||j==n-1){
                        str+=" "+t;
                }else{
                        str+="  ";
                }
        }
       }
        console.log(str);
  } 
}
//回字形
if(graph==4){
    for(var i=0;i<=10;i++){
        var str="";
              str+=t;
for(var j=0;j<=9;j++){
                if(i==0||i==10||j==9){
                        str+=" "+t;
                }else if(i==3&&j>=2&&j<=6){
                        str+=" "+t;
                }else if(i==7&&j>=2&&j<=6){
                        str+=" "+t;
                }else if(j==2&&i>=3&&i<=7){
                    str+=" "+t;
                }else if(j==6&&i>=3&&i<=7){
                    str+=" "+t;
                }else{
                        str+="  ";
                }
        }
                console.log(str);
    }
}
if(graph>=5){
    console.log("没有图形需要打印");
}
}
var graph=3;
var a=10;
var n=3;
var t="*";
var b=0;
zong(graph,a,n,t,b);
