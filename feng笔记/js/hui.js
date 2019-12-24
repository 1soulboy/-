for(var i=0;i<=10;i++){
        var str="";
              str+='*';
for(var j=0;j<=9;j++){
                if(i==0||i==10||j==9){
                        str+=" *";
                }else if(i==3&&j>=2&&j<=6){
                        str+=" *";
                }else if(i==7&&j>=2&&j<=6){
                        str+=" *";
                }else if(j==2&&i>=3&&i<=7){
                    str+=" *";
                }else if(j==6&&i>=3&&i<=7){
                    str+=" *";
                }else{
                        str+="  ";
                }
        }
                console.log(str);
    }