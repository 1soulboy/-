//切换实心空心正方形
function  zf(m,n,b,t){
for(var i=0;i<=n;i++){
        var str="";
              str+='t';
    for(var j=0;j<=m;j++){
            if(b==1){
                str+="t";
         }
             if(b==0){
                if(i==0||i==n||j==m){
                        str+=" t";
                }else{
                        str+="  ";
                }
        }
                }
                console.log(str);
    }
}
var m=9;
var n=10;
var b=0;
var t="*";
zf(m,n,b,t);

console.log('\n');

// 切换实心空心三角形
function sj(a,b){
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
                if(k==1||k==2*i+1||j==a-1){
                        str+="*";
                }else{
                        str+=" ";
                }
        }
       } 
        console.log(str);
  }
}
var a=10;
var b=0;
sj(a,b);

console.log('\n');



















