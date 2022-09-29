import React, { useState } from "react";
import './Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();
    const navigate = useNavigate();
    const [term, setTerm] = useState("");

    const search = (e) => {
        e.preventDefault();
        console.log("search!");
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: term,
        });
        navigate("/Goosle/search")
    };
    return (
    <form className='search'>
        <div className='searchInput'>
            <SearchIcon className='searchInIcon' />
            <input value={term} onChange={(e) => setTerm(e.target.value)} />
            <MicIcon />
        </div>
        {!hideButtons ? (
            <div className="searchButtons">
            <Button onClick={search} type="submit" variant="outlined">
                Goosle Search
            </Button>
            <Button variant="outlined">I'm Feeling Ducky</Button>
            </div>
            ) : (
                <div className="searchButtons">
                <Button
                    className="searchBtnHidden"
                    onClick={search}
                    type="submit"
                    variant="outlined"
                >
                    Goosle Search
                </Button>
                <Button className="ssearchBtnHidden" variant="outlined">
                    I'm Feeling Ducky
                </Button>
                </div>
        )}
    </form>
    );
}

export default Search