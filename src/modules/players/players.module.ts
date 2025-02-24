import { Module } from "@nestjs/common";
import { PlayersService } from "./players.service";
import { PlayersController } from "./players.controller";
import { Players } from "src/entities/Players";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [PlayersController],
  providers: [PlayersService],
  imports: [TypeOrmModule.forFeature([Players])],
})
export class PlayersModule {}
