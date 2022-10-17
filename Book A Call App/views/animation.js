

const Form=document.querySelector('.Form');
const Name=document.querySelector('.Name');
const Email=document.querySelector('.Email');
const Phone=document.querySelector('.Phone');
const Dates=document.querySelector('.Date');
const Time=document.querySelector('.Time');
const usersD=document.querySelector('#users');
const p=document.querySelector('#err');

Form.addEventListener('submit',(event)=>{saveUser(event)});
 async function saveUser(e){
    try{
  
        const userDetails={
            
          name:Name.value,
          email:Email.value,
          phone:Phone.value,
          date:Dates.value,
          time:Time.value
        }
 
       let response=await  axios.post('http://localhost:4900/register',userDetails);
       showBookedDetails(userDetails);

       Name.value='';

       Email.value='';
        
       Phone.value='';
       
       Dates.values="";
         
         
    
}
catch(err){
    console.log(err);
}
    

}

window.addEventListener('DOMContentLoaded',async (e)=>{
    let response=await axios.get('http://localhost:4900/registerDetails')
    for( i of response.data.res ){
    showBookedDetails(i);
    }

})

function showBookedDetails(display){
    
    const li=document.createElement('li');
    li.id=display.id;
    li.style.color='green';
    const litextNode=document.createTextNode(`Name: ${display.name} : Email: ${display.email} : PhoneNumber: ${display.phone} : Dates: ${display.date} :  Time: ${display.time}`);
    li.appendChild(litextNode);
    const Edit=document.createElement('button');
    Edit.className='EDIT';
    const edittextNode=document.createTextNode('EDIT');
    Edit.appendChild(edittextNode);
    
    li.appendChild(Edit);

    const DELETE=document.createElement('button');
    const deletetextNode=document.createTextNode('DELETE');
    DELETE.appendChild(deletetextNode);
    DELETE.className='DELETE'
    li.appendChild(DELETE);
    usersD.appendChild(li);

    

}


 function deleteUser(){
   
    usersD.addEventListener('click',async (e)=>{

    if(e.target.className==='DELETE'){

    usersD.removeChild(e.target.parentNode);



    const response=await axios.delete(`http://localhost:4900/success/delete/${e.target.parentElement.id}`);
    }
})
    


}

deleteUser()

function updateUser(){
   
    usersD.addEventListener('click',async(e)=>{
        e.preventDefault();

        let divide=e.target.parentElement.innerText.split(':')
        
        p.innerHTML="* Please Edit the details";
        
        setTimeout(()=>{p.remove()},3000);
        
        Name.value=divide[1]
        Email.value=divide[3]
        Phone.value=divide[5]
        usersD.removeChild(e.target.parentNode);
        const response=await axios.delete(`http://localhost:4900/success/delete/${e.target.parentElement.id}`);
       
     

    })

}

updateUser();