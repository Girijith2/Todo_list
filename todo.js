

function newTag(){

    var title=document.getElementById("title").value;
    var todays=document.getElementById("todays").value;
    // var sumbit=document.getElementById("submit");

    if(title !=="" && todays!==""){
        var parentdiv=document.getElementById("seconddiv")
        var rightdiv=document.createElement("div");
        rightdiv.className="rightdiv";
        var del=document.createElement("input");
        del.type="submit";
        del.className="deletebtn";
        del.value="Delete";

        rightdiv.innerHTML=`
            <h1>${title}</h1><br>
            <p>${todays}</p><br>
        
        `;
        rightdiv.append(del);
        // remove
        del.onclick=function(){
            removetodo(rightdiv);
        };

        //append
        parentdiv.append(rightdiv);

        //  clear inputs
        document.getElementById("title").value = "";
        document.getElementById("todays").value = "";

    }else{
        alert("pls fill all");
    }
}

function removetodo(element){
    element.remove();
}