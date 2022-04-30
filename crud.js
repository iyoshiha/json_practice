const sites=[];
const url = 'http://localhost:3000/sites';

function createData() {
    const newSiteName = document.getElementById("siteName").value;
        console.log(typeof(newSiteName));
    const newSiteUrl = document.getElementById("siteUrl").value;
        console.log(newSiteUrl);
    if (newSiteName === '' || newSiteUrl === '') return;

    const siteInfo = {
        name : newSiteName,
        url : newSiteUrl
    }

    // sites.push(siteInfo);
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(siteInfo)
    })
    .then(()=> {
    document.getElementById('siteName').value = '';
    document.getElementById("siteUrl").value = '';
    })
    .catch((err) => console.log(err))
}


var cody = {
    age:10,
    living:true,
    gender:'male'
}
var elsa = {
    age:20,
    gender:'female'
}
var aryObj = [cody, elsa];
        console.log(JSON.stringify(aryObj));

function readData() {
    const list = document.getElementById('dataList');
    list.innerHTML = '';

    // for (let i = 0; i < sites.length; i++) {
    //     list.innerHTML += `<li>${i} ${sites[i].name} ${sites[i].url}</li>`
    // }
    fetch(url)
    .then((res)=>res.json())
    .then((sites)=>{
        for (let i = 0; i < sites.length; i++) {
            console.log(`${sites[i].name}`);
            list.innerHTML += `<li>${sites[i].id} ${sites[i].name} ${sites[i].url}</li>`
        }
    })
}

function updateData() {
    const updateId = document.getElementById('updateId').value;
    const updateName = document.getElementById('updateName').value;
    const updateUrl = document.getElementById('updateUrl').value;

    if (updateId === '' || updateName === '' || updateUrl === '') return; 

    // sites[Number(updateId)] = {
    //     name: updateName,
    //     url: updateUrl
    // };
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(siteInfo)
    })

    document.getElementById('updateId').value = '';
    document.getElementById('updateName').value = '';
    document.getElementById("updateUrl").value = '';
}

function deleteData() {
    const deleteId = document.getElementById('deleteId').value;
    if (deleteId === '') return;

    fetch(url + '/' +deleteId, {
        method: 'DELETE'
    })
    .then(() => {
    document.getElementById("deleteId").value = '';
    })
    .catch((err) => console.log(err))
}
