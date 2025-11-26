import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Table({ tableName: 'users' })
export class User extends Model<User> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    @Field(() => Number)
    declare id: number


    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    @Field(() => String, { nullable: true })
    name: string


    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    @Field(() => String, { nullable: true })
    email: string

    
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    @Field({ nullable: true })
    password: string;
}
