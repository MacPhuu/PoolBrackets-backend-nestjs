import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./modules/user/user.module";
import { User } from "./modules/user/user.entity";
import { PlayersModule } from "./modules/players/players.module";
import { Players } from "./entities/Players";
import { EventsModule } from "./modules/events/events.module";
import { Events } from "./entities/Events";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "MacPhu12",
      database: "poolbrackets",
      entities: [User, Players, Events],
      synchronize: true,
    }),
    UserModule,
    PlayersModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
