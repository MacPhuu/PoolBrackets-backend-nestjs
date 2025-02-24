import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Controller("user")
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.UserService.findfAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<User | null> {
    return this.UserService.findOne(Number(id));
  }

  @Post()
  create(@Body() userData: Partial<User>): Promise<User> {
    return this.UserService.create(userData);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() userData: Partial<User>
  ): Promise<User | null> {
    return this.UserService.update(Number(id), userData);
  }

  @Delete(":id")
  delete(@Param("id") id: string): Promise<boolean> {
    return this.UserService.delete(Number(id));
  }
}
