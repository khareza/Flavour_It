import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateUsersTable1602789991659 implements MigrationInterface {
    name = 'UpdateUsersTable1602789991659'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `firstName` `firstName` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `lastName` `lastName` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `birthDate` `birthDate` datetime NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `country` `country` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `city` `city` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `houseApartmentNumber` `houseApartmentNumber` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `phone` `phone` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `joinDate` `joinDate` datetime NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `avatarUrl` `avatarUrl` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `resetPasswordHash` `resetPasswordHash` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `activationHash` `activationHash` varchar(255) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `activationHash` `activationHash` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `resetPasswordHash` `resetPasswordHash` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `avatarUrl` `avatarUrl` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `joinDate` `joinDate` datetime NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `phone` `phone` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `houseApartmentNumber` `houseApartmentNumber` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `city` `city` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `country` `country` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `birthDate` `birthDate` datetime NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `lastName` `lastName` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `firstName` `firstName` varchar(255) NOT NULL");
    }

}
