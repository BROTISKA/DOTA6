let select = document.querySelector('select')
let articles = document.querySelectorAll('article')
let container = document.querySelector('.container')
console.log(articles)
select.addEventListener('change' , () => {
  for (const article of articles) {
    if(select.value == article.dataset.type ||
      select.value == 'All'
    ){
        article.style.display = 'grid'
    }else{
        article.style.display = 'none'
    }
  }
})

let price = false
function sortPrise(event){
  price = !price
  event.preventDefault();
container.innerHTML = ''
let selected = [...articles].sort((a, b) => { return price ? a.dataset.price - b.dataset.price :
  b.dataset.price - a.dataset.price 
})
for ( const article of selected) {
  container.appendChild(article)
}
}

let country = false
function sortcountry(event){
  country = !country
  event.preventDefault();
container.innerHTML = ''
let selected = [...articles].sort((a, b) => { return country ? a.dataset.country.localeCompare(b.dataset.country) : b.dataset.country.localeCompare(a.dataset.country)
})
for ( const article of selected) {
  container.appendChild(article)
}
}

let name1 = false
function sortname(event){
  name1= !name1
  event.preventDefault();
container.innerHTML = ''
let selected = [...articles].sort((a, b) => { return name1 ? a.dataset.name1.localeCompare(b.dataset.name1) : b.dataset.name1.localeCompare(a.dataset.name1)
})
for ( const article of selected) {
  container.appendChild(article)
}
}