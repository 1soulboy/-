function ling(a,b){
    for(var i=0;i<=a;i++){
            var str="";
            for(var j=a;j>=i;j--){
                    str+=" ";
            }
           for(var k=1;k<=2*i+1;k++){
            if(b==1){
                    str+="*";
            }
            if(b==0){
                    if(k==1||k==2*i+1){
                            str+="*";
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
                    str+=" ";
                }
                for(var k=1;k<=2*i+1;k++){
                    if(b==1){
                        str+="*";
                }
                if(b==0){
                        if(k==1||k==2*i+1){
                                str+="*";
                        }else{
                                str+=" ";
                        }
                }
      }
      console.log(str);
      }
    }
    var a=5;
    var b=1;
    ling(a,b);
