interface ITeacherSubject {
    teachers_subjectsId: string;
    subjectsId: string;
    code: string;
    subjectName: string;
    nameUser: string;
}

export class TeacherSubject implements ITeacherSubject {
    subjectName: string;
    nameUser: string;
    // tslint:disable-next-line:variable-name
    teachers_subjectsId: string;
    subjectsId: string;
    code: string;
}
