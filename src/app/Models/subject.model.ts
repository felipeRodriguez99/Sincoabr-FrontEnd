interface ISubject {
    subjectsId: string;
    name: string;
    score: number;
}

export class SubjectModel implements ISubject {
    subjectsId: string;
    name: string;
    score: number;
}
