export class UsersDto {
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly full_name: string;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly gender: string;
  readonly role: string;
}

export class AdminUserDto extends UsersDto {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
