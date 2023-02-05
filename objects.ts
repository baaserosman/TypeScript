interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`taxi goes from X: ${point.x} to Y: ${point.y}`);
  }
}

class Bus implements Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`taxi goes from X: ${point.x} to Y: ${point.y}`);
  }
}

let taxi_1: Taxi = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 1, y: 2 };

let taxi_2 = new Taxi();
taxi_1.travelTo({ x: 5, y: 6 });
taxi_1.currentLocation = { x: 2, y: 5 };

let bus_1 = new Bus();

console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
