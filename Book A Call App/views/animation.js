

const Form=document.querySelector('.Form');
const Name=document.querySelector('.Name');
const Email=document.querySelector('.Email');
const Phone=document.querySelector('.Phone');
const Dates=document.querySelector('.Date');
const usersD=document.querySelector('#users');
const p=document.querySelector('#err');

Form.addEventListener('submit',(event)=>{saveUser(event)});
 async function saveUser(e){
    try{
    e.preventDefault();
    if (Name.value==='' || Email.value==='' || Phone.value==='' || Dates.value===''){
        p.innerHTML="* Please enter the details";
        setTimeout(()=>{p.remove()},2000);
    }
    else{
        
        const userDetails={
            
          UName:Name.value,
          UEmail:Email.value,
          UPhone:Phone.value,
          UDates:Dates.value
        }
 
       let response=await  axios.post('http://localhost:4900/register',userDetails);
       showBookedDetails(response.data.USER.id);
       
       console.log(response);
       Name.value='';

       Email.value='';
        
       Phone.value='';
       
       Dates.values="";
         
         
    }
}
catch(err){
    console.log(err);
}
    
    
}

function showBookedDetails(display){
    
    const li=document.createElement('li');
    li.id=display;
    li.style.color='green';
    const litextNode=document.createTextNode(`Name: ${Name.value} Email: ${Email.value} PhoneNumber: ${Phone.value} Dates: ${Dates.value}`);
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

    updateUser(li);

}


 function deleteUser(){
    try{
    usersD.addEventListener('click', D);
    async function D(e){
    if(e.target.className==='DELETE')
    usersD.removeChild(e.target.parentNode);
   const response=await axios.delete(`http://localhost:4900/success/delete/${e.target.parentElement.id}`);
}
    }
catch(err){
    console.log(err);
}

}
deleteUser()


function updateUser(ed){
   
     usersD.addEventListener('click',D);
    function D(e){
     if(e.target.className==='EDIT'){

     console.log(ed);
     
    }
}

}
