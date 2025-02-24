import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  findfAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  create(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    user.create_at = new Date();
    user.update_at = new Date();
    return this.userRepository.save(user);
  }

  async update(id: number, userData: Partial<User>): Promise<User | null> {
    userData.update_at ||= new Date();
    await this.userRepository.update(id, userData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.userRepository.delete(id);
    return !!(result.affected && result.affected > 0); // Return true if the user was deleted, otherwise false
  }
}
