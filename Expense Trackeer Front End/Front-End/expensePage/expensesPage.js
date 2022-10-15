const table=document.getElementById('table');

let todayDate=new Date

let date=todayDate.getDate();

let month=todayDate.getMonth();

let year=todayDate.getFullYear();

Dates=date+'-'+month+'-'+year;

var total=0;

window.addEventListener('DOMContentLoaded',async (e)=>{
    e.preventDefault();
    const token=localStorage.getItem('token');
    let response =await axios.get('http://localhost:9000/Expenses',{headers:{'Authorization':token}});


    for (i of response.data.res){
    

    let date=i.createdAt.split('T')[0];
 
   
    const tr=document.createElement('tr');
    
    const thDate=document.createElement('th');
    thDate.id='thR';
    thDate.innerText=date;

    const thDescription=document.createElement('th');
    thDescription.id='thR';
    thDescription.innerText=i.description;

    const thCategory=document.createElement('th');
    thCategory.id='thR';
    thCategory.innerText=i.type;

    const thExpense=document.createElement('th');
    thExpense.id='thR';
    thExpense.innerText=i.amount;

    const thIncome=document.createElement('th');
    thIncome.id='thR';
    thIncome.innerText=i.income;

    total+=i.amount;

    tr.appendChild(thDate);
    tr.appendChild(thDescription);
    tr.appendChild(thCategory);
    tr.appendChild(thIncome);
   
    tr.appendChild(thExpense);
    
    table.appendChild(tr);
    
    }
    



let total_tr=document.createElement('tr');
total_tr.id='expenseTotal'
let total_th=document.createElement('th');
let total_t=document.createElement('th');
let total_=document.createElement('th');
let tota=document.createElement('th');
let tot=document.createElement('th');
total_th.innerHTML=total;
total_.innerHTML='Total Expense for Day'
total_tr.appendChild(total_t);
total_tr.appendChild(total_);
total_tr.appendChild(tota);
total_tr.appendChild(tot);
total_tr.appendChild(total_th);

table.appendChild(total_tr)


})
