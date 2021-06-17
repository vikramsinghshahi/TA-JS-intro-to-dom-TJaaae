let ul = document.querySelector(`ul`);



let allPeople = got.houses.reduce((acc ,cv) =>{
    acc = acc.concat(cv.people);
    return acc
} 
,[]
)

console.log(allPeople);


let cardHTML = allPeople.map((person) => {
    return ` <l1 class="box padding">
    <div class= "flex ">
      <img src= ${person.image} 
       alt = ${person.name}>
    <h2> ${person.name}</h2>
    </div>
    <p> ${person.description}</p>
   <nav> <a href= ${person.wikiLink}>Learn More!</a></nav>
 </l1>`
})


ul.innerHTML = cardHTML.join("");

console.log(cardHTML); 