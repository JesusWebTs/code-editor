const manageLocation = () => {
    let getQuery = (query) => {
        let queryString = new URLSearchParams(window.location.search);
        return {
            [`${query}`]: queryString.get(query),
        };
    };
    let setQuery = ({ query, value }) => {
        let queryString = new URLSearchParams(window.location.search);
        window.history.replaceState(null, null, `/?${query}=${value}`);
        return {
            [`${query}`]: value,
        };
    };
    let getLocation = () => {
        return {
            host: window.location.hostname,
            path: window.location.pathname,
        };
    };
    let setLocation = () => {};
    return { getQuery, setQuery, getLocation, setLocation };
};

export default manageLocation;