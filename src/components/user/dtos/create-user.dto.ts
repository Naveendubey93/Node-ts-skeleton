// interface CreateUserDto {
// 	name: string;
// 	email: string;
// 	age: number;
// 	password!: string;
// }

class CreateUserDto {
	name!: string;

	email!: string;

	age!: number;

	password!: string;
}

export default CreateUserDto;
