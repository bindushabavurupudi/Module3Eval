function Admindashboard(){
    return (

        <div>
            <h2>Admin Dashboard</h2>
            <SearchAndFilters/>
            <RestaurantCards isAdmin={true}/>
        </div>
    )
}

export default Admindashboard;