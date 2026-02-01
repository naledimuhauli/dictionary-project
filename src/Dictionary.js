import React, { useState} from "react";

export default function Dictionary() {

let [keyword, setKeyword] = useState("");

const search = (event) => {
    event.preventDefault();
    alert(`Searching for: ${keyword}`);
}

const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
}
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" placeholder="Search for a word" onChange={handleKeywordChange} />
                </form>
        </div>
    );
}