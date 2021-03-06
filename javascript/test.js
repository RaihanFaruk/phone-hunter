const searchingDetail = document.getElementById("search-results");
const itemDetails = document.getElementById("item-details");

const loadItems = () => {
  const itemDetails = document.getElementById("item-details");
  itemDetails.textContent = "";
  const itemText = document.getElementById("searchInput").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${itemText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaysSystem(data.data));
};
const displaysSystem = items => {
  if (items.length == "") {

    document.getElementById('text-show').style.display = "block";
    searchingDetail.textContent = '';
  } else {
    document.getElementById('text-show').style.display = "none";
    const toItems = items.slice(0, 20);

    searchingDetail.textContent = '';
    toItems.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
      <div class="card text-center h-100 p-3 ">
      <img src="${item.image}" class="card-img-top w-50 mx-auto h-75 " alt="...">
      <div class="card-body">
        <h4 class="card-title text-info">${item.phone_name}</h4>
        <h5 class="card-text"><span class="text-primary fw-bold">Brand:</span> ${item.brand}</h5>
        <h5 class="card-text"><span class="text-primary fw-bold">Model:</span> ${item.slug}</h5>
      </div>
      <div class="">
      <button onclick="loadItemsDetails('${item.slug}')"
      class="btn w-100 btn-warning rounded-pill"
      type="button"
      id="button-addon2"
    >
      Details
    </button>
      </div>
    </div>
      `;
      searchingDetail.appendChild(div);

    });

  }

};

const loadItemsDetails = (itemId) => {
  // const searchingDetail = document.getElementById("search-results");
  // searchingDetail.textContent = '';
  const url = `https://openapi.programming-hero.com/api/phone/${itemId}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displaysSystemDetails(data.data));
};

const displaysSystemDetails = (item) => {
  console.log(item);
  itemDetails.textContent = "";
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <div class="row p-3">
  <div class="col-md-4">
      <img src="${item.image}" class="img-fluid  h-75" alt="..." />
  </div>
  <div class="col-md-7">
      <div class="card-body">
      <h1 class="card-title">Information</h1>
      <h6><span class="fw-bold">Name:</span> ${item.name}</h6>
      <h6><span class="fw-bold">Model:</span> ${item.slug}</h6>
      <h6><span class="fw-bold">Released:</span> ${item.releaseDate? item.releaseDate:`<h6>No Release Date No Found </h6> `}</h6>
      <h5 class="fw-bold"> Main Features :</h5>
      <h6><span class="fw-bold">Chipset:</span> ${item.mainFeatures.chipSet}</h6>
      <h6><span class="fw-bold">Display Size:</span> ${item.mainFeatures.displaySize}</h6>
      <h6><span class="fw-bold">Memory:</span> ${item.mainFeatures.memory}</h6>
      <h6><span class="fw-bold">Sensors:</span> ${item.mainFeatures.sensors}</h6>
      <h4 class="fw-bold"> Others:</h4>
      <h6><span class="fw-bold">Bluetooth:</span> ${item.others?.Bluetooth}</h6>
      <h6><span class="fw-bold">GPS:</span> ${item.others?.GPS}</h6>
      <h6><span class="fw-bold">NFC:</span> ${item.others?.NFC}</h6>
      <h6><span class="fw-bold">Radio:</span> ${item.others?.Radio}</h6>
      <h6><span class="fw-bold">USB:</span> ${item.others?.USB}</h6>
      <h6><span class="fw-bold">WLAN:</span> ${item.others?.WLAN}</h6>
      
      
      <p> </p>
      <a target="_blank" href="details video
      }" class="btn btn-danger shadow-none rounded">Explore</a>
      </div>
  </div>
  </div>
      `;
  itemDetails.appendChild(div);
};