import React from "react";
import BookList from "../bookList/BookList";
import ShoppingCartTable from "../shopingCartTable/ShopingCartTable";

const HomePage = () => {
    return(
        <div>
            <BookList books={[]} />
            <ShoppingCartTable />
        </div>
    )
};

export default HomePage
