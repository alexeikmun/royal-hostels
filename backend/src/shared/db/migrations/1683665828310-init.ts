import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1683665828310 implements MigrationInterface {
    name = 'init1683665828310';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE \`guest\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `CREATE TABLE \`property_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `CREATE TABLE \`property\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`country\` varchar(255) NOT NULL, \`zipcode\` varchar(255) NOT NULL, \`typeId\` int NOT NULL, \`image\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`rate\` decimal(6,2) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `CREATE TABLE \`amenity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `CREATE TABLE \`room\` (\`id\` int NOT NULL AUTO_INCREMENT, \`price\` int NOT NULL, \`description\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`maxGuests\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `CREATE TABLE \`comment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` text NOT NULL, \`comment\` text NOT NULL, \`overallRating\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `CREATE TABLE \`booking\` (\`id\` int NOT NULL AUTO_INCREMENT, \`startDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`endDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`statusId\` int NOT NULL, \`guests\` int NOT NULL, \`commentId\` int NULL, UNIQUE INDEX \`REL_9b8f32a7aa67946d0eb89e8c09\` (\`commentId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `CREATE TABLE \`booking_status\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `CREATE TABLE \`profile\` (\`id\` int NOT NULL AUTO_INCREMENT, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NULL, \`address\` varchar(255) NULL, \`country\` varchar(255) NULL, \`city\` varchar(255) NULL, \`zipcode\` varchar(255) NULL, \`birthday\` date NULL, \`contact_number\` varchar(255) NULL, \`email\` varchar(255) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `CREATE TABLE \`admin\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`isSuper\` tinyint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `CREATE TABLE \`property_amenities_amenity\` (\`propertyId\` int NOT NULL, \`amenityId\` int NOT NULL, INDEX \`IDX_d7760c08391960d305d3545527\` (\`propertyId\`), INDEX \`IDX_c69572a61bce15aeded2e1d6ba\` (\`amenityId\`), PRIMARY KEY (\`propertyId\`, \`amenityId\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `CREATE TABLE \`room_amenities_amenity\` (\`roomId\` int NOT NULL, \`amenityId\` int NOT NULL, INDEX \`IDX_5bfa52967d1e4749ccdf0a1c65\` (\`roomId\`), INDEX \`IDX_3acd6e0d83817c14b380521af6\` (\`amenityId\`), PRIMARY KEY (\`roomId\`, \`amenityId\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `CREATE TABLE \`booking_rooms_room\` (\`bookingId\` int NOT NULL, \`roomId\` int NOT NULL, INDEX \`IDX_8f1a8045893e516c9e6a74c1cb\` (\`bookingId\`), INDEX \`IDX_f002f6e24167ea10d48ad286b6\` (\`roomId\`), PRIMARY KEY (\`bookingId\`, \`roomId\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `ALTER TABLE \`property\` ADD CONSTRAINT \`FK_19f06dc4d98fde06c69fe2feb6b\` FOREIGN KEY (\`typeId\`) REFERENCES \`property_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`booking\` ADD CONSTRAINT \`FK_2805c8cb30d54f8272c830cb488\` FOREIGN KEY (\`statusId\`) REFERENCES \`booking_status\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`booking\` ADD CONSTRAINT \`FK_9b8f32a7aa67946d0eb89e8c091\` FOREIGN KEY (\`commentId\`) REFERENCES \`comment\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`property_amenities_amenity\` ADD CONSTRAINT \`FK_d7760c08391960d305d3545527f\` FOREIGN KEY (\`propertyId\`) REFERENCES \`property\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
        );
        await queryRunner.query(
            `ALTER TABLE \`property_amenities_amenity\` ADD CONSTRAINT \`FK_c69572a61bce15aeded2e1d6bad\` FOREIGN KEY (\`amenityId\`) REFERENCES \`amenity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`room_amenities_amenity\` ADD CONSTRAINT \`FK_5bfa52967d1e4749ccdf0a1c654\` FOREIGN KEY (\`roomId\`) REFERENCES \`room\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
        );
        await queryRunner.query(
            `ALTER TABLE \`room_amenities_amenity\` ADD CONSTRAINT \`FK_3acd6e0d83817c14b380521af63\` FOREIGN KEY (\`amenityId\`) REFERENCES \`amenity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`booking_rooms_room\` ADD CONSTRAINT \`FK_8f1a8045893e516c9e6a74c1cb6\` FOREIGN KEY (\`bookingId\`) REFERENCES \`booking\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
        );
        await queryRunner.query(
            `ALTER TABLE \`booking_rooms_room\` ADD CONSTRAINT \`FK_f002f6e24167ea10d48ad286b6b\` FOREIGN KEY (\`roomId\`) REFERENCES \`room\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE \`booking_rooms_room\` DROP FOREIGN KEY \`FK_f002f6e24167ea10d48ad286b6b\``,
        );
        await queryRunner.query(
            `ALTER TABLE \`booking_rooms_room\` DROP FOREIGN KEY \`FK_8f1a8045893e516c9e6a74c1cb6\``,
        );
        await queryRunner.query(
            `ALTER TABLE \`room_amenities_amenity\` DROP FOREIGN KEY \`FK_3acd6e0d83817c14b380521af63\``,
        );
        await queryRunner.query(
            `ALTER TABLE \`room_amenities_amenity\` DROP FOREIGN KEY \`FK_5bfa52967d1e4749ccdf0a1c654\``,
        );
        await queryRunner.query(
            `ALTER TABLE \`property_amenities_amenity\` DROP FOREIGN KEY \`FK_c69572a61bce15aeded2e1d6bad\``,
        );
        await queryRunner.query(
            `ALTER TABLE \`property_amenities_amenity\` DROP FOREIGN KEY \`FK_d7760c08391960d305d3545527f\``,
        );
        await queryRunner.query(
            `ALTER TABLE \`booking\` DROP FOREIGN KEY \`FK_9b8f32a7aa67946d0eb89e8c091\``,
        );
        await queryRunner.query(
            `ALTER TABLE \`booking\` DROP FOREIGN KEY \`FK_2805c8cb30d54f8272c830cb488\``,
        );
        await queryRunner.query(
            `ALTER TABLE \`property\` DROP FOREIGN KEY \`FK_19f06dc4d98fde06c69fe2feb6b\``,
        );
        await queryRunner.query(
            `DROP INDEX \`IDX_f002f6e24167ea10d48ad286b6\` ON \`booking_rooms_room\``,
        );
        await queryRunner.query(
            `DROP INDEX \`IDX_8f1a8045893e516c9e6a74c1cb\` ON \`booking_rooms_room\``,
        );
        await queryRunner.query(`DROP TABLE \`booking_rooms_room\``);
        await queryRunner.query(
            `DROP INDEX \`IDX_3acd6e0d83817c14b380521af6\` ON \`room_amenities_amenity\``,
        );
        await queryRunner.query(
            `DROP INDEX \`IDX_5bfa52967d1e4749ccdf0a1c65\` ON \`room_amenities_amenity\``,
        );
        await queryRunner.query(`DROP TABLE \`room_amenities_amenity\``);
        await queryRunner.query(
            `DROP INDEX \`IDX_c69572a61bce15aeded2e1d6ba\` ON \`property_amenities_amenity\``,
        );
        await queryRunner.query(
            `DROP INDEX \`IDX_d7760c08391960d305d3545527\` ON \`property_amenities_amenity\``,
        );
        await queryRunner.query(`DROP TABLE \`property_amenities_amenity\``);
        await queryRunner.query(`DROP TABLE \`admin\``);
        await queryRunner.query(`DROP TABLE \`profile\``);
        await queryRunner.query(`DROP TABLE \`booking_status\``);
        await queryRunner.query(
            `DROP INDEX \`REL_9b8f32a7aa67946d0eb89e8c09\` ON \`booking\``,
        );
        await queryRunner.query(`DROP TABLE \`booking\``);
        await queryRunner.query(`DROP TABLE \`comment\``);
        await queryRunner.query(`DROP TABLE \`room\``);
        await queryRunner.query(`DROP TABLE \`amenity\``);
        await queryRunner.query(`DROP TABLE \`property\``);
        await queryRunner.query(`DROP TABLE \`property_type\``);
        await queryRunner.query(`DROP TABLE \`guest\``);
    }
}
