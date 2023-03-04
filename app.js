console.log("Let's get this party started!");

// async function getRandomGif(res){
//     const res = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=4BPxxOjpKAKxdbWK110W5KJLfucO1i9r&tag=&rating=g');
//     console.log(res.data);
//     let newImg = document.createElement('img');


// }
const $searchTerm = $('#search');
const $imageArea = $('#images');


async function getGif(){
    let search = $searchTerm.val();
    $searchTerm.val('');
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q: search,
            api_key: '4BPxxOjpKAKxdbWK110W5KJLfucO1i9r'
        }
    });

    // let allGifs = res.data.length;
    // if(allGifs){
    //     let randomIdx = Math.floor(Math.random() * allGifs);
    //     let $newImg = $("<img>", {
    //         src: res.data[randomIdx].images.original.url
    //     });
    //     imageArea.append($newImg);
    // }
   
    let allData = res.data.data.length;
    let randomIdx = Math.floor(Math.random() * allData);
    console.log(res);
    console.log(allData);
    console.log(randomIdx);
    console.log(res.data.data[randomIdx].images.original.url);

    let newImg = document.createElement('img');
    newImg.src = res.data.data[randomIdx].images.original.url;
    $imageArea.append(newImg);

}

// async function getRandomGif(){
    
// }



const form = document.querySelector('#search-form');
form.addEventListener('submit', async function(evt){
    evt.preventDefault();

    getGif();
})

$('#btn-empty').on('click', function(){
    $imageArea.empty();
})

