// 1. Fetch, load and show categories on html

// create loadCategories
const loadCategories = () => {
    
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then(data => displayCategories(data.categories))
    .catch((error) => console.error(error))
}


// create loadCategories
const loadVideos = () => {
    
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then(data => displayVideos(data.videos))
    .catch((error) => console.error(error))
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    videos.forEach(video => {
        console.log(video)
        const card = document.createElement('div');
        card.classList = 'card card-compact'
        card.innerHTML = 
        `
        <figure>
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
    </div>
    <div>
    <h2 class="font-bold">${video.title}</h2>
    <div class="flex items-center gap-2">
    <P class="text-gray-400">${video.authors[0].profile_name}</p>
    <img class="w-5" src="https://img.icons8.com/fluency/48/instagram-check-mark.png"/>
    </div>
    <P></p>
    </div>
  </div>
        `;
        videoContainer.append(card);
    })
}

// create displayCategories
// const displayCategories = (categories) => {
//     const categoryContainer = document.getElementById('categories');
//     console.log(categoryContainer)
//     for(const data of categories){
//         const button = document.createElement('btn');
//         button.innerText = data.category;
//         categoryContainer.appendChild(button);
//     }
// } 




const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories')
    categories.forEach((item) => {
        console.log(item);
        // create a button
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;
        // add button category container
        categoryContainer.append(button);

    })
}

loadCategories();
loadVideos()