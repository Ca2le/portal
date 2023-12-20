
export interface IUser {
    name: string,
    password: string,
    role: RoleType,
    email: string,
    id: string
}

export type RoleType = 'padwan' | 'admin' | 'master'

export interface ServerResponseS1 {
    status: string,
    message: string,
    payload: string

}