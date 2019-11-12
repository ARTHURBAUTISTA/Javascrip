const listaTweets = document.getElementById('lista-tweets');
let tweetToDelete = '';

EventListener();

function EventListener() {
    document.addEventListener('DOMContentLoaded', localStorageReady);
    document.querySelector('#formulario').addEventListener('submit', addTweet);
    listaTweets.addEventListener('click', removeTweet)
}

let Tweet = new tweet();

function addTweet() {

    let contentTweet = document.getElementById('tweet').value.trim();
    Tweet.addTweet(contentTweet);
    document.getElementById('tweet').value = '';
}

function removeTweet(event) {

    event.preventDefault();
    if (event.target.tagName === 'SPAN') {

        tweetToDelete = event.target.parentElement.parentElement.textContent.slice(0, -1);

        /*===========================
        boton de confirmacion de eliminar
        =============================*/

        console.log(tweetToDelete);

        Swal.fire({
            title: 'ATENCION',
            text: `se eliminara el Tweet:  "${tweetToDelete}"`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5cba25',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Deseo Eliminar!'
        }).then((result) => {
            if (result.value) {

                event.target.parentElement.parentElement.remove();
                Tweet.removeTweetLS(tweetToDelete);
                Swal.fire({
                    type: 'success',
                    title: 'eliminado',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })


    }


}

function localStorageReady() {
    let tweets = Tweet.getLocalStorage();

    tweets.forEach(function(tweet) {
        Tweet.createTweet(tweet)
    });
}

// function clearTweetBox(){
//     document
// }