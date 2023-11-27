export interface SelectListItem {
  id: number;
  name: string;
  min?: number;
  max?: number;
}

// Location.ts
export interface Location extends SelectListItem {}

// Industry.ts
export interface Industry extends SelectListItem {}

// Position.ts
export interface Position extends SelectListItem {}

// Salary.ts
export interface Salary extends SelectListItem {
  min: number;
  max: number;
}
