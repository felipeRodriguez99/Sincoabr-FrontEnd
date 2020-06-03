interface IStudent {
    code: string;
    userId: string;
    birthDate: Date;
    attending: string;
    attendingNumber: string;
    phone: string;
    address: string;
    city: string;
    email: string;
    password: string;
    name: string;
    latName: string;
    createDate: Date;
    rolId: string;
}

export class StudentListModel implements IStudent {
    userId: string;
    code: string;
    birthDate: Date;
    attending: string;
    attendingNumber: string;
    phone: string;
    address: string;
    city: string;
    email: string;
    password: string;
    name: string;
    latName: string;
    createDate: Date;
    rolId: string;
}
