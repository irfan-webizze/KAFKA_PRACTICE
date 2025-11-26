import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/users.entity';

@Module({
    imports: [
        SequelizeModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                dialect: 'mysql',
                host: config.get<string>('DB_HOST'),
                port: config.get<number>('DB_PORT'),
                username: config.get<string>('DB_USERNAME'),
                password: config.get<string>('DB_PASSWORD'),
                database: config.get<string>('DB_NAME'),
                autoLoadModels: true,
                synchronize: true,
                logging: config.get('NODE_ENV') === 'development',
                models: [
                    User
                ],
            }),
        }),
    ],
})
export class DatabaseModule { }
