export interface SwapiHuman {
  height: string;
  mass: string;
  name: string;
  gender: string;
  birth_year: string;
}

export interface SwapiPlanet {
  name: string;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;
}

export interface SwapiStarShip {
  name: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
}
