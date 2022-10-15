const Form=document.querySelector('#Form');
const Email=document.querySelector('#Email');
const password=document.querySelector('#Password');

Form.addEventListener('submit',(event)=>{saveUserDetails(event)});

async function saveUserDetails(event){
    
    try{
    
    event.preventDefault();
    let user={
        UEmail:Email.value,
        UPassword:password.value
    }
    
    let response=await axios.post('http://localhost:9000/userLogin',user);
    console.log(response.data.token);
    localStorage.setItem('token',response.data.token);
    alert("Successfully Logged-In");
    window.location.href='../expensePage/expense.html';
     
    }
    catch(err){
        console.log(err);
    }
    

}

