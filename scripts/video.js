// 1. Fetch, load and show categories on html

// create loadCategories
const loadCategories = () => {
    
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then(data => displayCategories(data.categories))
    .catch((error) => console.error(error))
}

// create displayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories');
    console.log(categoryContainer)
    for(const data of categories){
        const button = document.createElement('btn');
        button.innerText = data.category;
        // categoryContainer.appendChild(button);
    }
} 




// const displayCategories = (categories) => {
//     const categoryContainer = document.getElementById('categories')
//     categories.forEach((item) => {
//         console.log(item);
//         // create a button

//         const button = document.createElement('button');
//         // button.classList = 'btn';
        // button.innerText = item.category;
//         // add button category container
//         categoryContainer.append(button);

//     })
// }

loadCategories();