export const apiFetch = (url, setBooks, options, books, id) => {

    fetch(url, options)
        .then(response => {
            if (response.status >= 200 && response.status <= 300) return response.json();
            else throw new Error("error in downloading data");
        })
        .then(data => {
            switch (options.method) {
                case "GET":
                    const booksFromData = data.map(item => {
                        return ({
                            title: item.title,
                            body: item.body
                        })
                    })
                    return (setBooks(booksFromData));
                case "POST":
                    return (setBooks(books.concat(data)));
                case "PATCH":
                    const newBooks = books.map((item, index) => {
                        if (id === index) return item.body = data;
                        return item
                    })
                    return (setBooks(newBooks));
                case "DELETE":
                    data = [];
                    return (setBooks(data));
                default:
                    console.log("unexpected method")
            }
        })
        .catch((err) => console.log(err))
}