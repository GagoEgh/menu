export interface IUser {
    createdAt?: string,
    email: string,
    firstName: string,
    id?: number,
    isActive?: boolean,
    lastName: string,
    role?:IRole

}

interface IRole {
    createdAt: string,
    id:number,
    key:string,
    name:string,
    updatedAt:string,
}