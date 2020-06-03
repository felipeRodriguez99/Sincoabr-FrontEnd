interface ITeacher {
    code: string;
    birthDate: Date;
    qualification: number;
    phone: string;
    specialization: string;
    email: string;
    password: string;
    name: string;
    latName: string;
    createDate: Date;
    rolId: string;
}

export class TeacherModel implements ITeacher {
    code: string;
    birthDate: Date;
    qualification: number;
    phone: string;
    specialization: string;
    email: string;
    password: string;
    name: string;
    latName: string;
    createDate: Date;
    rolId: string;
}
