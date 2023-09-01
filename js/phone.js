const loadPhone = async (searchText, isShowAll) =>{
      const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
      const data = await res.json();
      const phones = data.data;
      displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {

      const phoneContainer = document.getElementById('phone-container');
      phoneContainer.textContent = '';
       const showContainer = document.getElementById('show-container')
      if(phones.length > 12 && !isShowAll){
         showContainer.classList.remove('hidden')
      }else{
        showContainer.classList.add('hidden')
      }
      console.log('is show all', isShowAll)
    if(!isShowAll){
      phones = phones.slice(0,12);
    }

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
          <button onclick = "handelShowBtn('${phone.slug}')" class="btn btn-primary">Show Details</button>
        </div>
      </div>
      `
      // 4 set appendChild
      phoneContainer.appendChild(phoneCard)
  });      
  loadingSpinner(false)
}

const handelShowBtn = async (id) =>{
  console.log(id)
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  const phone = data.data;
  showPhoneDetails(phone)
}



const showPhoneDetails = (phone) => {
  console.log(phone)
  const showPhoneDetails2= document.getElementById('show-phone-details');
  showPhoneDetails2.innerText = phone.name;
  const divContainer = document.getElementById('text-container');
  divContainer.innerHTML = `
  <img src="${phone.image
  }" alt="">

  `
  show_Details_modal.showModal()
}

// handel search
const handelSearch = (isShowAll) =>{
    loadingSpinner(true);
  // console.log('searchText')
  const searchInputField = document.getElementById('input-search')
  const searchInput = searchInputField.value ;
  console.log(searchInput)
  loadPhone(searchInput, isShowAll)
}

const loadingSpinner = (loading) => {
    const loadingSpinnerText = document.getElementById('loading-container');
   if(loading){
    loadingSpinnerText.classList.remove('hidden')
   }else{
    loadingSpinnerText.classList.add('hidden')
   }
}

const loadingShowAll = () =>{
      handelSearch(true)
}
// loadPhone();
