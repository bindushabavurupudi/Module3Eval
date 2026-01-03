function CustomerDashboard(){
 return(
<div>
    <h2>Customer Dashboard</h2>
    <SearchAndFilters/>
    <RestaurantCards isAdmin = {false} />
</div>

 )
}

export default CustomerDashboard;