let myLeads = [];
const inputEL = document.querySelector("#input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    //ulEl.innerHTML += "<li>" + leads[i] + "</li>";
    /*   const li = document.createElement("li");
  li.textContent = leads[i];
   ulEl.append(li);*/
    /*     listItems +=
      "<li><a href='" +
      leads[i] +
      " ' target='_blank'>" +
      leads[i] +
      "</a></li>"; */
    listItems += `
      <li>
        <a href="${leads[i]} target="_blank" > 
          ${leads[i]}
        </a>
      </li>
    `;
    // back ticks ( ` ) to make it a TEMPLATE STRING/LITERALS
  }
  ulEl.innerHTML = listItems;
  //console.log(listItems);
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEL.value);
  inputEL.value = "";

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  console.log(localStorage.getItem("myLeads"));
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

tabBtn.addEventListener("click", function () {
  /*   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
}); */

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
