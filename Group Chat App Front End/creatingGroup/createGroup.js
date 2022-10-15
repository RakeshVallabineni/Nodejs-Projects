const createGroup=document.getElementById('createGroup');
const crInput=document.getElementById('crInput');

createGroup.addEventListener('submit',async (e)=>{
    try{
    e.preventDefault();
    let creatingGroup={
        groupname:crInput.value
    }
    const token=localStorage.getItem('token');
    let response=await axios.post('http://localhost:8000/creatingGroup',creatingGroup);
    console.log(response.data.res.id);
    alert(response.data.message);
    let GROUPID={
        groupid:response.data.res.id
    }
    let postResponse=await axios.post('http://localhost:8000/postcreatingGroup',GROUPID,{headers:{'Authorization':token}});
    }
    catch(err){
        console.log(err);
    }
})

const deletingGroup=document.getElementById('deleteGroup');
const delGroup=document.getElementById('delGroup');

deletingGroup.addEventListener('submit',async (e)=>{
    try{
        e.preventDefault();
        let deleteGroup={
            groupName:delGroup.value
        }
        const token=localStorage.getItem('token');
        let response=await axios.post('http://localhost:8000/deleteGroup',deleteGroup,{headers:{'Authorization':token}});
        console.log(response);
        alert(response.data.res);
        }
        catch(err){
            console.log(err);
           
        }
})


const addMember=document.getElementById('addMember');
const ADDEmailID=document.getElementById('ADDEmailID');
const groupName=document.getElementById('groupName');

addMember.addEventListener('submit',async (e)=>{
    try{
        e.preventDefault();
        let ADDUSER={
            addUser:ADDEmailID.value,
            groupname:groupName.value
        }
        const token=localStorage.getItem('token');
        let response=await axios.post('http://localhost:8000/addUser',ADDUSER,{headers:{'Authorization':token}});
        alert(response.data.res);
        }
        catch(err){
            console.log(err);
        }
})


const deleteMember=document.getElementById('deleteMember');
const deleteGroupName=document.getElementById('deleteGroupName');
const deleteMembers=document.getElementById('deleteMembers');

deleteMember.addEventListener('submit',async (e)=>{
    try{
        e.preventDefault();
        let deleteGroupMemberId={
            groupMemberName:deleteGroupName.value,
            groupMemberId:deleteMembers.value
        }
        const token=localStorage.getItem('token');
        let response=await axios.post('http://localhost:8000/deleteMember',deleteGroupMemberId,{headers:{'Authorization':token}});
        alert(response.data.res);
        }
        catch(err){
            console.log(err);
        }
})

const makeAdmin=document.getElementById('makeAdmin');
const makeAdminGroup=document.getElementById('makeAdminGroup');
const userEmailForGroup=document.getElementById('userEmailForGroup');

makeAdmin.addEventListener('submit',async (e)=>{
    try{
        e.preventDefault();
        let makeUserAdmin={
           adminGroupName:makeAdminGroup.value,
           adminGroupEmail:userEmailForGroup.value
        }
        const token=localStorage.getItem('token');
        let response=await axios.post('http://localhost:8000/makeUserAdmin',makeUserAdmin,{headers:{'Authorization':token}});
        alert(response.data.res);   
    }
        catch(err){
            console.log(err);
        }
})