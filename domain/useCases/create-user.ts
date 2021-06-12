import { UserModel } from "../models/User";

export interface CreateUserUseCase {
    create(user: UserModel): Promise<void | Error>
}