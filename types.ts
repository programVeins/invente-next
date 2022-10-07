export enum EventPass {
    Technical = "Technical",
    NonTechnical = "Non-Technical",
    Workshop = "Workshop",
    Hackathon = "Hackathon",
}

export enum Department {
    CSE = "Computer Science and Engineering",
    IT = "Information Technology",
    ECE = "ECE",
    EEE = "Electrical and Electronics",
    MECH = "Mechanical",
    CIVIL = "Civil",
    CHEM = "Chemical",
    BME = "Biomedical",
}

export interface Section {
    sectionName: string;
    sectionData: string;
}
