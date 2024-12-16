// var arrCheckList=[];
var count=0;
var xhttp= new XMLHttpRequest();

xhttp.onreadystatechange=function (){
    if(this.readyState==4 && this.status==200)
{
    var result= this.responseText;
    result=JSON.parse(result);
    
    let tdata=document.getElementById('tabledata');
  
    for(i=0;i<result.length;i++)
    {
            
        var row=tdata.insertRow(i+1);
        var cell1=row.insertCell(0);
        cell1.innerText=result[i].id;
        var cell2=row.insertCell(1);
        cell2.innerText=result[i].title;
        var cell3=row.insertCell(2);
        checkbox(cell3,result[i].completed);
       
    } 
    
}
}

xhttp.open('GET','https://jsonplaceholder.typicode.com/todos',true);
xhttp.send();


function checkbox(cell,val)
{
   var check= document.createElement("input");
   check.type="checkbox";
   check.checked=val
   
   cell.appendChild(check);
}



function Completedtask()
{
    
        var value=document.getElementById('tabledata');
        value.addEventListener("change",(event)=>
        {   
            let promise=new Promise((resolve,reject)=>
            {
            
            if(event.target.checked)
                {count++;}
            if(count==5)
                {resolve("Congrats 5 task has been completed");}
            else
                {reject("not completed!")}
            });
            promise.then(val=>alert(val)).catch(error=>console.log(error));

        });
        
    
}
Completedtask();
