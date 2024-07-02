//product interface
class Vehicle {
    logVehicle(){}
}
//concrete products
class Car extends Vehicle {
    logVehicle(){
        console.log("This is a Car")
    }
}

class Bike extends Vehicle {
    logVehicle(){
        console.log("This is a bike")
    }
}
//creator
class VehicleFactory{
    createVehicle(){}
}
//concrete creator
class CarFactory{
    createVehicle(){
        return new Car()
    }
}

class BikeFactory{
    createVehicle(){
        return new Bike()
    }
}
const newBikeFactory = new BikeFactory()
const newBike = newBikeFactory.createVehicle()
newBike.logVehicle()