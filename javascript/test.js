const loadItems = () => {
  const itemText = document.getElementById("searchInput").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${itemText}`;
  fetch(url)
    .then((res) => res.json())

    .then((data) => displayItems(data.data));
};

const displayItems = items => {
  if (items.length == 0) {
    document.getElementById('text-show').style.display = "block";
    console.log('Please A Valid');
  } else {
    const twentyItems = items.slice(0, 20);
    const searchResults = document.getElementById("search-results");

    twentyItems.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
      <div class="card text-center h-100 p-3">
      <img src="${item.image}" class="card-img-top w-50 mx-auto h-75" alt="...">
      <div class="card-body">
        <h4 class="card-title text-info">${item.phone_name}</h4>
        <h5 class="card-text"><span class="text-primary fw-bold">Brand:</span> ${item.brand}</h5>
        <h5 class="card-text"><span class="text-primary fw-bold">Model:</span> ${item.slug}</h5>
      </div>
      <div class="">
      <button onclick="loadItemsDetails('${item.slug}')"
      class="btn w-100 btn-outline-warning"
      type="button"
      id="button-addon2"
    >
      Details
    </button>
      </div>
    </div>`;
      searchResults.appendChild(div);
    });

  }

};

const loadItemsDetails = (itemId) => {
  const url = `https://openapi.programming-hero.com/api/phone/${itemId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayItemsDetails(data.data));
};

const displayItemsDetails = (item) => {
  console.log(item);
  const itemDetails = document.getElementById("item-details");
  itemDetails.textContent = "";
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <div class="row p-3">
  <div class="col-md-4">
      <img src="${item.image}" class="img-fluid " alt="..." />
  </div>
  <div class="col-md-8 ">
      <div class=" ">
      <h1 class="">Main Features</h1>
      <h6><span class="fw-bold">Name:</span> ${item.name}</h6>
      <h6><span class="fw-bold">Model:</span> ${item.slug}</h6>
      <h6><span class="fw-bold">Released:</span> ${item.releaseDate? item.releaseDate:`<h6>No Release Date Found </h6>`}</h6>
      <h4 class="fw-bold"> Main Features</h4>
      
      <h6><span class="fw-bold">Chipset:</span> ${item.mainFeatures.chipSet}</h6>
      <h6><span class="fw-bold">Display Size:</span> ${item.mainFeatures.displaySize}</h6>
      <h6><span class="fw-bold">Memory:</span> ${item.mainFeatures.memory}</h6>
      <h6><span class="fw-bold">Sensors:</span> ${item.mainFeatures.sensors}</h6>
      <h4 class="fw-bold"> Others</h4>
      <h6><span class="fw-bold">Bluetooth:</span> ${item.others.Bluetooth}</h6>
      <h6><span class="fw-bold">GPS:</span> ${item.others.GPS}</h6>
      <h6><span class="fw-bold">NFC:</span> ${item.others.NFC}</h6>
      <h6><span class="fw-bold">Radio:</span> ${item.others.Radio}</h6>
      <h6><span class="fw-bold">USB:</span> ${item.others.USB}</h6>
      <h6><span class="fw-bold">WLAN:</span> ${item.others.WLAN}</h6>
      
      
      <p> </p>
      <a target="_blank" href="details video
      }" class="btn btn-primary shadow-none">Explore</a>
      </div>
  </div>
  </div>
      `;
  itemDetails.appendChild(div);
};