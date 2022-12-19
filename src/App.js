import "./App.css";
import Header from "./Header";
import data from "./data.json";
import { useState } from "react";
import photosnap from "./Assests/CompanyLogo/photosnap.jpg"


function App() {
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [params] = useState(data)

    const filteredData = params.filter((item) => {
        return (Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        )
    })
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        const filteredData = params.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }

    return (
        <>
            <header>
                <Header />
                <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="searchField"
                    placeholder="Search for..."
                    onChange={(e) => searchItems(e.target.value)}
                />
            </header>
            <div className="container">
                {filteredData.length !== 0 ? (<>
                    {filteredData?.map((item, id) => {
                        return (
                            <div className="cardContainer" key={id}>
                                <div className="image">
                                    <img src={photosnap} alt="Company_Logo" className="Logo" />
                                </div>
                                <div className="leftSiteCard">
                                    <div className="lefttop">
                                        <div className="Industry">
                                            <span className="position">{item.name}</span>
                                            {item.isNew && <span className="isNew">{item.isNew}</span>}
                                            {item.isFeatured && (
                                                <span className="isFeature">{item.isFeatured}</span>
                                            )}
                                        </div>
                                        <div className="title">{item.position}</div>
                                        <div className="timeSpan">
                                            <span>{item.dateTime}</span>
                                            <span className="dotSymbol"> &middot; </span>
                                            <span>{item.onrole}</span>
                                            <span className="dotSymbol"> &middot; </span>
                                            <span>{item.onsite}</span>
                                        </div>
                                    </div>
                                    <div className="RightSideContainer">
                                        {item.technology.map((tech, index) => {
                                            return <p key={index}>{tech}</p>
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </>) : (
                    <div className="error">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{
                            height: "65px",
                            fill: "#5fa5a3",
                        }}><path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zm240 80c0-8.8 7.2-16 16-16c45 0 85.6 20.5 115.7 53.1c6 6.5 5.6 16.6-.9 22.6s-16.6 5.6-22.6-.9c-25-27.1-57.4-42.9-92.3-42.9c-8.8 0-16-7.2-16-16zm-80 80c-26.5 0-48-21-48-47c0-20 28.6-60.4 41.6-77.7c3.2-4.4 9.6-4.4 12.8 0C179.6 308.6 208 349 208 369c0 26-21.5 47-48 47zM303.6 208c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm-128 32c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" /></svg>
                        <h1 > Sorry,We Couldn't Find Any Result.!<br />
                        </h1>

                    </div>
                )}
            </div>
        </>
    );
}

export default App;
