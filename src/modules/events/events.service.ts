import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Events } from "src/entities/Events";
import { Repository } from "typeorm";

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Events)
    private readonly EventsRepository: Repository<Events>
  ) {}

  findAll(): Promise<Events[]> {
    return this.EventsRepository.find();
  }

  findById(id: number): Promise<Events | null> {
    return this.EventsRepository.findOneBy({ id });
  }

  findByName(name: string): Promise<Events | null> {
    return this.EventsRepository.findOneBy({ name });
  }
}
