var House = function(address, price, bedrooms, bathrooms, garage, hvac, schools, highlights, date){
    //Properties
    this.address = address;
    this.price = price;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.garage = garage;
    this.hvac = hvac;
    this.schools = schools;
    this.highlights = highlights;
    this.date = date;
    
    //Methods
    House.prototype.favoriteListing = function()
    {
        if(this.price <= 250000){
            console.log("This listing has been added to favorites.");
        }else
        {
            console.log("Do you want to offer the seller a lower price?");
        }
    }

    House.prototype.removeFavorite = function()
    {
        if(this.bedrooms < 5)
        {
            console.log("There are fewer than five bedrooms. Listing has been removed from favorites.");
        }else
        {
            console.log("Would you like to request more information about this property?");
        }
    }
}