
//Base URL
import axios from "axios";

export const base_url = "https://www.googleapis.com/books/v1";


//search
const query = "?q=";

export const myKey = 'key=AIzaSyDS3gexSiigQ-xbvU9Phe7EOhruFFykaAQ'



//search parameters
export const parameters = {
    title: "intitle:",
    author: "inauthor:",
    publisher: "inpublisher:",
    category: "subject:",
    isbn: "isbn:",
};

//filters
export const filters = {
    all: " ",
    partial_preview: "&filter=partial",
    full_preview: "&filter=full",
    free: "&filter=free-ebooks",
    paid: "&filter=paid-ebooks",
    ebooks: "&filter=ebooks",
};

// order
export const orders = {
    relevance: "&orderBy=relevance",
    newest: "&orderBy=newest",
};


