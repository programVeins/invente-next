export enum EventType {
  Individual = "Individual",
  Team = "Team",
  TeamOrSolo = "Team Or Solo",
}

export enum Department {
  CSE = "CSE",
  IT = "IT",
  ECE = "ECE",
  EEE = "EEE",
  MECH = "MECH",
  CIVIL = "CIVIL",
  CHEM = "CHEM",
  BME = "BME",
}

export interface Event {
  id: string;
  title: string;
  desc: string;
  type: EventType;
  teamSize: string;
  dept: Department;
  venue: string;
  time: string;
  meta: Record<string, any>;
}

export interface Section {
  sectionName: string;
  sectionValue: string | string[];
}
