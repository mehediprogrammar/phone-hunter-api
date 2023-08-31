const loadPhone = async (searchText) =>{
      const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
      const data = await res.json();
      const phones = data.data;
      displayPhones(phones);
}

const displayPhones = phones => {
      const phoneContainer = document.getElementById('phone-container');
      phoneContainer.textContent = '';
       const showContainer = document.getElementById('show-container')
      if(phones.length > 12){
         showContainer.classList.remove('hidden')
      }else{
        showContainer.classList.add('hidden')
      }



      phones = phones.slice(0,12);
  phones.forEach(phone => {
      console.log(phone)
      //2 create a div
      const phoneCard = document.createElement('div');
      phoneCard.classList = `card py-4 bg-gray-50 shadow-xl`;
      //3 set inner html
      phoneCard.innerHTML =`
      <figure><img src="${phone.image
      }"></figure>
      <div class="card-body">
        <h2 class="card-title">${phone.brand}</h2>
        <p>${phone. phone_name}</p>
        <p>${phone. slug}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
      `
      // 4 set appendChild
      phoneContainer.appendChild(phoneCard)
  });     

}


// handel search
const handelSearch = (searchText) =>{
  // console.log('searchText')
  const searchInputField = document.getElementById('input-search')
  const searchInput = searchInputField.value ;
  console.log(searchInput)
  loadPhone(searchInput)
}
// loadPhone();
