const searchPhone = () => {
    const searchField = document.getElementById('search-felid');
    const searchText = searchField.value;
    // clear data;
    searchField.value = '';
    // load data
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
}

const displaySearchResult = phones => {
    const searchResult = document.getElementById("search-result");
    searchResult.textContent = '';
    phones.forEach(phone => {
        const div = document.createElement('dib');
        div.classList.add('col');
        div.innerHTML =
            `<div class="card h-100 rounded bg-primary" style="width: 20rem;">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body bg-warning">
                <h5 class="card-title">${phone.brand}</h5>
                <p class="card-text">${phone.phone_name}</p>
                <p class="card-text">${phone.slug}</p>
                <button id="details" type="button" class="btn btn-dark">Details</button>
            </div>
        </div>`;
        searchResult.appendChild(div);

    });

    
    const loadPhoneDetail1 = (phoneId) => {

        const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))
    }



    // const loadPhoneDetail = phoneId => {

    //     const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => console.log(data.data))

    // }

    ////////////////////////////

    // const displayPhoneDetail = phone => {
    //     const phoneDetails = document.getElementById('phone-detail');
    //     const div = document.createElement('div');
    //     div.classList.add('card');
    //     div.innerHTML = `<img src="${phone.image}" class="card-img-top" alt="...">
    //                 <div class="card-body">
    //                     <h5 class="card-title">${phone.brand}</h5>
    //                     <p class="card-text">${phone.phone_name}</p>
    //                     <a href="${phone.slug}" class="btn btn-danger">Go Youtube</a>
    //                 </div>`;



    //     phoneDetails.appendChild(div);
    // }



    //////////////////////////////
}