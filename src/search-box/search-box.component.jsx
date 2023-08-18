import './search-box.styles.css';

const searchBox = ({placeholder, onSearchHandler, className}) => {
    
        return(
            <input
            className={`search-box   ${className}`}
            type="search"
            placeholder={placeholder} 
            onChange = {onSearchHandler}
            />
        )

}

export default searchBox;