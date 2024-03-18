const Buscador = ({ search, setSearch }) => {

    const handleChange = (e) => {
        let value = e.target.value;
        setSearch(value);
    };

    return (
        <>
            <form className="d-flex mb-3" role="search">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={handleChange}
                />
            </form>
        </>
    );
};

export default Buscador;