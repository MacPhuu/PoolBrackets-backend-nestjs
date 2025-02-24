import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Players } from "src/entities/Players";
import { Repository } from "typeorm";

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Players)
    private readonly playersRepository: Repository<Players>
  ) {}

  findAll(): Promise<Players[]> {
    return this.playersRepository.find();
  }
}
