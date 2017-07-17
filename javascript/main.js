console.log('hello'); 

let watch = [
  {
    name: 'The Gentleman',
    description: 'The Gentleman is a classic watched based of ancient Egyptian designs. Its sleek look and wide appeal means you can check the time, anytime. ',
    price: "$196",
    image:"images/prod-watch1.jpg"
  },
  {
    name: 'The Lord',
    description: 'The Lord is a watch with a royal appeal. Sculpted to be reminiscent of Odin’s remaining eye, The Lord is entirely unique in its look and appeal. ',
    price: "$188",
    image:"images/prod-watch2.jpg"
  },
  {
    name: 'The One',
    description: 'The One was built to remind one of the feeling of watching their favorite action movie. Idk this text doesn’t really matter and it’s filler. ',
    price: "$176",
    image:"images/prod-watch3.jpg"
  },
  {
    name: 'Smart Time',
    description: 'It is a smart-watch that does smart things like invent the Tesla car, and predict the future. ',
    price: "$166",
    image:"images/prod.watch4.jpg"
  },
  {
    name: 'The Leatherman',
    description: 'A watch with leather that looks mediocre at best. This filler text is brought to you by two cups of coffee and a mild hangover. ',
    price: "$155",
    image:"images/prod-watch5.jpg"
  },
  {
    name: 'Silver Streak',
    description: 'Have you seen the movie Silver Streak with Richard Pryer and Gene Wilder? It’s really good and worth your time. ',
    price: "$144",
    image:"images/prod-watch6.jpg"
  },
  {
    name: 'Apple Watch',
    description: 'We stole it and now we sell it. It’s ours, try and sue us. ',
    price: "$133",
    image:"images/prod-watch7.jpg"
  },
  {
    name: 'The Idea',
    description: 'I am completely out of ideas for watches so this one is the watch that represents the lack of my ideas. ',
    price: "$111",
    image:"images/prod-watch8.png"
  } 
];

watch.forEach(function(item){
    document.getElementById("watches").innerHTML += `<li><img src="${item.image}"</li>`
    document.getElementById("watches").innerHTML += `<h1>${item.name}</h1>`
    document.getElementById("watches").innerHTML += `<li>${item.price}</li>`
    document.getElementById("watches").innerHTML += `<li>${item.description}</li>`
});