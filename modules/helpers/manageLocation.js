const manageLocation = () => {
    let getQuery = (query) => {
        let queryString = window.location.search.replace("?data=", "");

        return {
            [`${query}`]: queryString,
        };
    };
    let setQuery = ({ query, value }) => {
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