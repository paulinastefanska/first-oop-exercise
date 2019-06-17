function Phone(brand, price, color) {
    //Here we put interior of the constructing function.
    this.brand = brand;
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
var iPhoneXS = new Phone("Apple", 4800, "silver");
iPhoneXS.printInfo();

var GalaxyS10 = new Phone("Samsung", 3200, "black");
GalaxyS10.printInfo();

var P30pro = new Phone("Huawei", 3800, "white");
P30pro.printInfo();
