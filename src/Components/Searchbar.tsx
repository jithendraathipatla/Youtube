import React from 'react';

const Searchbar = (props:any) => {
    return (
        <div className="searching_ui">
            <form onSubmit={props.search}>
                <input type="text" placeholder="search videos" name="search"/>
                <button type="submit" value="submit">Search</button>
            </form>
        </div>
    );
};

export default Searchbar;