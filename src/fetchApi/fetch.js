export const apiFetch = (setBooks, options, books, id) => {

    const users = ((options.method === "PATCH") || (options.method === "DELETE")) ? "/1?userId=1" : "?userId=1"

    const url = `https://jsonplaceholder.typicode.com/posts${users}`

    fetch(url, options)
        .then(response => {
            if (response.ok) return response.json();
            else throw new Error("error in downloading data");
        })
        .then(data => {
            switch (options.method) {
                case "GET":
                    return (setBooks(data));

                case "POST":
                    return setBooks([...books, data]);

                case "PATCH":
                    const newBooks = books.map(item => {
                        if (item.id === id) {
                            item = data;
                            data.id = id;
                        };
                        return (item);
                    });
                    return (setBooks(newBooks));

                case "DELETE":
                    return (setBooks([]));

                default:
                    return console.log("unexpected method");
            }
        })
        .catch((err) => console.log(err))
};