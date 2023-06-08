import { Column, Entity, PrimaryGeneratedColumn, getRepository } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;
}

const repository = getRepository(User);

const user = new User();
user.name = 'Troy';
user.email = 'troy@sololearn.com';
user.age = 25;
await repository.save(user);

const results = await repository.find({ where: { name: 'Troy' } });
const result = await repository.findOne({ where: { name: 'Troy' } });
const myUser = await repository.findOne({where: {name: "Troy"}});
user.email = "t@sololearn.com";
await repository.save(user);
await repository.delete(user.id);