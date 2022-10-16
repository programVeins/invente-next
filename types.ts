export enum EventPass {
    Technical = "Technical",
    NonTechnical = "Non-Technical",
    Workshop = "Workshop",
    Hackathon = "Hackathon",
}

export enum Department {
    CSE = "Computer Science and Engineering",
    IT = "Information Technology",
    ECE = "Electronics and Communication",
    EEE = "Electrical and Electronics",
    MECH = "Mechanical",
    CIVIL = "Civil",
    CHEM = "Chemical",
    BME = "Biomedical",
    BCOM = "BCOM",
}

export interface Section {
    sectionName: string;
    sectionData: string;
}
export enum EventType {
    Individual = "Individual",
    Team = "Team",
    TeamOrSolo = "Team Or Solo",
}

export interface Event {
    id: string;
    event_name: string;
    description: string;
    type: EventType;
    size: string;
    department: Department;
    venue: string;
    time: string;
    sections: Record<string, any>;
}
