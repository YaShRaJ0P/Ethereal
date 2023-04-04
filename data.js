var defaultThreads = [
    {
        id: 1,
        title: "Why Sustainable development is important?",
        author: "Aaron",
        date: Date.now(),
        content: "Why Sustainable development is important?",
        comments: [
            {
                author: "Sushil",
                date: Date.now(),
                content: "It improves your health, protects enviornment."
            },
            {
                author: "Vicky",
                date: Date.now(),
                content: "It saves your money."
            }
        ]
    },
    {
        id: 2,
        title: "Why should we follow sustainable living as it costs more money?",
        author: "Yash",
        date: Date.now(),
        content: "Why should we follow sustainable living as it costs more money?",
        comments: [
            {
                author: "Harsha",
                date: Date.now(),
                content: "Sustainable living can help reduce environmental degradation and pollution, conserve natural resources, and promote social and economic well-being."
            },
            {
                author: "Sushil",
                date: Date.now(),
                content: "It improves your health. As for example cycling increases health and saves enviornment."
            }
        ]
    }
]

var threads = defaultThreads
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
