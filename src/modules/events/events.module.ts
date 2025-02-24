import { Module } from "@nestjs/common";
import { EventsService } from "./events.service";
import { EventsController } from "./events.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Events } from "src/entities/Events";

@Module({
  controllers: [EventsController],
  providers: [EventsService],
  imports: [TypeOrmModule.forFeature([Events])],
})
export class EventsModule {}
