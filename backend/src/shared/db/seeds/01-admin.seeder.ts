import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Admin } from 'src/admin/infrastructure/entity/admin.entity';
import { User } from 'src/user/infrastructure/entity/user.entity';
import { Role } from 'src/auth/domain/enum/role.enum';
// import adminArray from '../data/admin';

// export let amenityCache: Admin[] = [];

export default class AdminSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        const adminRepository = dataSource.getRepository(Admin);
        const userRepository = dataSource.getRepository(User);

        const user = new User();
        user.name = 'Admin';
        user.address = '123 Admin St.';
        user.birthday = new Date('2018-11-21');
        user.city = 'Bogota';
        user.country = 'Colombia';
        user.email = 'admin@user.com';
        user.phone = '123456';
        user.role = Role.ADMIN;
        user.zipcode = '110111';
        user.password = '1q2w3e4r';

        await userRepository.save(user);

        const admin = new Admin();
        admin.name = 'Admin';
        admin.isSuper = true;

        await adminRepository.save(admin);
    }
}
