function ti(n,a,b){
    for(var i=n;i<=a;i++){
            var str="";
            for(var j=a;j>=i;j--){
                    str+=" ";
            }
           for(var k=1;k<=2*i+1;k++){
            if(b==1){
                    str+="*";
            }
            if(b==0){
                    if(k==1||k==2*i+1||j==a-1||j==n-1){
                            str+="*";
                    }else{
                            str+=" ";
                    }
            }
           }
            console.log(str);
      }
    }
    var n=3;
    var a=10;
    var b=1;
    ti(n,a,b);