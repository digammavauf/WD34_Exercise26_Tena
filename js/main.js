let htmlconsole = {
    log: function(text) {
        document.querySelector("#htmlconsole").innerHTML += `${text}<br>`;
    }
};

document.querySelector("#show-local").addEventListener("click", function(event) {
    getData();
});

document.querySelector("#show-online").addEventListener("click", function(event) {
    getOutsideData();
});

function getData() {
    fetch("sample.txt").then(function(res) {
        return res.text();
    }).then(function(data) {
        htmlconsole.log(data);
    });
}

function getOutsideData() {
    fetch('https://reqres.in/api/users?page=1&per_page=5').then(function(res) {
        return res.text();
    }).then(function(req) {
        let reqObj = JSON.parse(req);
        let itemCount = reqObj.total;
        let itemsPerPage = reqObj.per_page;
        let currentPage = reqObj.page;
        let totalPageCount = reqObj.total_pages;
        htmlconsole.log(`total no. of items: ${itemCount}`);
        htmlconsole.log(`items per page: ${itemsPerPage}`);
        htmlconsole.log(`current page: ${currentPage}`);
        htmlconsole.log(`total no. of pages: ${totalPageCount}`);
        reqObj.data.forEach(function(set) {
            htmlconsole.log(`First Name: ${set.first_name} | First Name: ${set.last_name} | First Name: ${set.email}`);
        });        
    });
}