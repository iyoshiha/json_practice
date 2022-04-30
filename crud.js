const sites=[];

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

    sites.push(siteInfo);

    document.getElementById('siteName').value = '';
    document.getElementById("siteUrl").value = '';
}


function readData() {
    const list = document.getElementById('dataList');
    list.innerHTML = '';

    for (let i = 0; i < sites.length; i++) {
        list.innerHTML += `<li>${i} ${sites[i].name} ${sites[i].url}</li>`
    }
}

function updateData() {
    const updateId = document.getElementById('updateId').value;
    const updateName = document.getElementById('updateName').value;
    const updateUrl = document.getElementById('updateUrl').value;

    if (updateId === '' || updateName === '' || updateUrl === '') return; 

    sites[Number(updateId)] = {
        name: updateName,
        url: updateUrl
    };

    document.getElementById('updateId').value = '';
    document.getElementById('updateName').value = '';
    document.getElementById("updateUrl").value = '';
}

function deleteData() {
    const deleteId = document.getElementById('deleteId').value;
    if (deleteId === '') return;

    sites.splice(Number(deleteId), 1);
    document.getElementById("deleteId").value = '';
}