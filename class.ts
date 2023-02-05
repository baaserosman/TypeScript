
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