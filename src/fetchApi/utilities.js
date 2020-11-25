export const url = ['https://jsonplaceholder.typicode.com/posts?userId=1', 'https://jsonplaceholder.typicode.com/posts/1'];

export const options = (option, title, fragment, changedText) => {
    switch (option) {
        case "GET":
            return ({
                method: 'GET',
                body: null,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
        case "POST":
            return {
                method: 'POST',
                body: JSON.stringify(
                    {
                        title: title,
                        body: fragment,
                    }
                ),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            };
        case "PATCH":
            return {
                method: 'PATCH',
                body: JSON.stringify({
                    body: changedText,
                    title: title,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        case "DELETE":
            return (
                {
                    method: 'DELETE',
                }
            )
        default:
            console.log("unexpected option")
    };

};