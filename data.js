const data=[{id:1,productName:"Chutes and Ladders",image:"../public/ChutesandLadders.jpg",price:15.75,salePrice:15.75},{id:2,productName:"Monopoly",image:"../public/Monopoly.jpg",price:15.25,salePrice:15.25},{id:3,productName:"Clue",image:"../public/Clue.jpg",price:20,salePrice:15.2},{id:4,productName:"The Game of Life",image:"../public/GameofLife.jpg",price:16,salePrice:10},{id:5,productName:"TRESomme Shampoo",image:"../public/Tresomme.jpg",price:45,salePrice:30},{id:6,productName:"Michael Kors Purse",image:"../public/MichaelKorsPurse.jpg",price:145,salePrice:145},{id:7,productName:"Apple Watch Ultra",image:"../public/AppleWatch.jpg",price:200,salePrice:175}];

// A function that accepts the array of data, a property
// name, and a query value, and returns the object that matches
// that condition
function finder(data, prop, query) {
  return data.find(obj => obj[prop] === query);
}

// A function to create properly a formatted
// currency string - pass in a number, a locale
// (e.g. 'en-GB'), and a currency type
function toCurrency(number, locale, type) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: type }
  ).format(number);
}

// Find the "Clue" object
const clue = finder(data, 'productName', 'Clue');

// Create the HTML using the object property values
// from the "Clue" object
const html = `
  <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>  
  <img class="card-img-top" width="450" height="200" src="${clue.image}" alt="..." />         
     <div class="card-body p-4">
        <div class="text-center">
           <h5 class="fw-bolder">${clue.productName}</h5>
              <div class="d-flex justify-content-center small text-warning mb-2">
                 <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                    <div class="bi-star-fill"></div>
                 </div>
              <span class="text-muted text-decoration-line-through">${toCurrency(clue.price, 'en-GB', 'GBP')}</span>
              ${toCurrency(clue.salePrice, 'en-GB', 'GBP')}
           </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
           <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
        </div>
     </div>
  </div>
`;

// Append the HTML to the page
document.body.insertAdjacentHTML('beforeend', html);