
const form=document.getElementById('form')
const input=document.getElementById('id1')

//alert(input)

document.getElementById('btn').addEventListener('click',(e)=>{
    //add()
    e.preventDefault()
    validation()
}) 
const validation=()=>
{
    if(input.value=="")
    {
      document.getElementById('error').innerHTML="enter something name"  //error ,for blank page submitted 
    }
    else
    {
        acceptData()
        addData()
    }
}
let data={}
const acceptData=()=>
{
    data[0]=input  //data stored
}
const addData=()=>
{   
    //inserting data into table 
    // using this argument with onclicks

  document.getElementById('table').innerHTML+=`
                <tr><td>${data[0].value}</td><td><i onclick="editData(this)" class="glyphicon glyphicon-edit" style="margin-left:10px"></i>
                <i style="margin-left:10px" onclick="deleteData(this)" class="glyphicon glyphicon-trash"></i></td></tr>`
   data[0]=null
   
}
const deleteData=(e)=>
{
        e.parentElement.parentElement.remove()  //deleting insert data into table  remov() removes the whole tag
}
const editData=(e)=>
{   
    document.getElementById('id1').innerHTML=null

   e.parentElement.parentElement.remove() 


}
