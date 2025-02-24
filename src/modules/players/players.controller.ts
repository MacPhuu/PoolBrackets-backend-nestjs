import { Controller, Get } from "@nestjs/common";
import { PlayersService } from "./players.service";
import { Players } from "src/entities/Players";

@Controller("players")
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  findAll(): Promise<Players[]> {
    return this.playersService.findAll();
  }
}
