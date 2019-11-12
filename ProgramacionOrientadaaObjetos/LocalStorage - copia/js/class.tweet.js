class tweet {
    content = '';
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    document.write(today);

    constructor() {

    }

    addTweet(contentTweet) {

        if (contentTweet != '') {
            this.content = contentTweet;

            console.log(this.content);

            this.createTweet(this.content);

            this.addTweetLocalS(this.content)

        } else {
            Swal.fire({
                type: 'warning',
                title: 'Tweet Vacío',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }

    createTweet(tweet) {
        const li = document.createElement('li');
        li.classList = "list-group-item rounded-pill text-break";

        const btnClose = document.createElement('button');
        btnClose.classList = 'close';

        const spanClose = document.createElement('span');
        spanClose.classList = 'badge badge-pill badge-light text-danger';
        spanClose.setAttribute = ('aria-hiden', true);
        spanClose.textContent = 'x';

        btnClose.appendChild(spanClose);
        li.innerText = tweet;
        listaTweets.appendChild(li);

        li.appendChild(btnClose);

    }

    addTweetLocalS(tweet) {
        let tweets;
        tweets = this.getLocalStorage();
        tweets.push(tweet)

        localStorage.setItem('tweets', JSON.stringify(tweets))

    }

    getLocalStorage() {
        let tweets;

        if (localStorage.getItem('tweets') === null) {
            tweets = [];
        } else {
            tweets = JSON.parse(localStorage.getItem('tweets'));
        }

        return tweets;
    }

    removeTweetLS(tweetD) {
        let tweets = this.getLocalStorage();
        tweets.forEach(function(tweet, index) {

            if (tweetD === tweet) {
                tweets.splice(index, 1);
            }
        });
        localStorage.setItem('tweets', JSON.stringify(tweets))
    }




}