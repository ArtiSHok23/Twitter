let tweets = [
    {
        id: '1',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Винина Анастасия',
        comment: [],
    },
    {
        id: '2',
        text: 'Привет!',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '3',
        text: 'Привет! #js №2022',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '4',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '5',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '6',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '7',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '8',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '9',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '10',
        text: 'Приветю Как дела?',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Отступов Александр',
        comment: [],
    },
    {
        id: '11',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '12',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '13',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '14',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '15',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '16',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '17',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '18',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '19',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },
    {
        id: '20',
        text: 'Привет! #js',
        createdAt: new Date('2022-03-0N23:00:00'),
        author: 'Радченко Виктория',
        comment: [],
    },

];

/* let cloneTweets = JSON.parse(JSON.stringify(tweets)); */

(function() {
    let user = 'Current_author';

    function getTweets(skipFrom = 0, skipTo = 10, filterConfig) {
        const newTweets = tweets.slice(skipFrom, skipTo);

        return newTweets;
    }

    function getTweet(currId) {
        return tweets.find(item => item.id === String(currId)) || 'Invalid id';
    }

    function validateTweet(tw) {
        const i = Number(tw);
    
        if(tweets[i].id === 'string' && tweets[i].text === 'string' && tweets[i].author === 'string') {
            return true;
        } else {
            return false;
        }
    }

    /* function addTweet() {

    }

    function editTweet() {

    }

    function removeTweet() {

    }

    function validateComment(com) {
        const i = Number(com);
    
       
    }

    function addComment() {

    } */

    function changeUser(usr) {
        if (usr = 'string') {
            user = usr;
            alert('Пользователь успешно изменён!');
        } else {
            alert('Неверное имя пользователя');
        }
    }

}());
