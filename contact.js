let nameNode = document.getElementById("name");
        let errNode1 = document.getElementById("err1");

        function validate1(){
            errNode1.innerHTML="";
            nameNode.style.border="2px green solid";
            nameNode.style.backgroundColor='transparent';
            let name=nameNode.value;
            if(name===""){
                errNode1.innerHTML="<b>this field is required</b>";
                nameNode.style.border="2px red solid ";
                nameNode.style.backgroundColor='transparent';
                return false;
            }else{
                return true;
            }
        }   