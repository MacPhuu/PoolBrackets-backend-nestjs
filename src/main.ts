import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "http://localhost:9000", // Hoặc '*' nếu bạn muốn cho phép từ mọi nơi
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Nếu bạn gửi cookie hoặc xác thực
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
