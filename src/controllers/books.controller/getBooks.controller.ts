const getBooks = ({response}: { response: any }) => {
    response.body = [{
        isbn: "1",
        author: "Robin Wieruch",
        title: "The Road to React",
    }, {
        isbn: "2",
        author: "Kyle Simpson",
        title: "You Don't Know JS: Scope & Closures",
    }, {
        isbn: "3",
        author: "Andreas A. Antonopoulos",
        title: "Mastering Bitcoin",
    }];
};


export {getBooks};
