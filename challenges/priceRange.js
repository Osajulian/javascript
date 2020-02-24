
let priceRange = [{
    name: 'inexpensive',
    image: 'inexpensive.png',
    link: 'inexpensive.html'
},
{
    name: 'moderate',
    image: 'moderate.png',
    link: 'moderate.html'
},
{
    name: 'pricey',
    image: 'pricey.png',
    link: 'link.html'
}
]

function PriceRanger(name, image, link) {
   this.name = name;
   this.image = image;
   this.link = link;
}

let highEnd = new PriceRanger('high-end', 'highend.png', 'highend.html')
console.log(highEnd)

