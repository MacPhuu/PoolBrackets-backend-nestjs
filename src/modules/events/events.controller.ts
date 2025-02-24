import { Controller, Get, Param } from "@nestjs/common";
import { EventsService } from "./events.service";
import { Events } from "src/entities/Events";

@Controller("events")
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  findAll(): Promise<Events[]> {
    return this.eventsService.findAll();
  }

  // @Get(":id")
  // findById(@Param("id") id: number): Promise<Events | null> {
  //   return this.eventsService.findById(id);
  // }

  @Get(":eventName")
  findByName(@Param("eventName") name: string): Promise<Events | null> {
    return this.eventsService.findByName(name);
  }
}
