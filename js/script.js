function Phone(brand, price, color, camera) {
    //Here we put interior of the constructing function.
    this.brand = brand;
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
	this.color = color;
	this.camera = camera;
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and main camera has: " + this.camera + "Mpx" + ".");
}
var iPhoneXS = new Phone("Apple", 4800, "silver", 12);
iPhoneXS.printInfo();

var GalaxyS10 = new Phone("Samsung", 3200, "black", 12);
GalaxyS10.printInfo();

var P30pro = new Phone("Huawei", 3800, "white", 40);
P30pro.printInfo();

var Mi9SE = new Phone("Xiaomi", 1500, "blue", 48);
Mi9SE.printInfo();
