-- CreateTable
CREATE TABLE `allergy` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `name` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blockedUser` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `blockDate` DATETIME(3) NOT NULL,
    `isActive` BOOLEAN NOT NULL,
    `blockingUserId` INT NOT NULL,
    `blockedUserId` INT NOT NULL,
INDEX `FK_02972d5482050ddce5b947ff27a`(`blockingUserId`),
INDEX `FK_59bb7b96bfedcdc96f346dbf8c9`(`blockedUserId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cuisine` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dishType` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `forbiddenIngredient` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `ingredientId` INT,
    `orderId` INT,
INDEX `FK_04530e6ca17258846c331a63569`(`ingredientId`),
INDEX `FK_f640b332c6bafe7de576dc0c53e`(`orderId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ingredient` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `name` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,
    `unitId` INT,
INDEX `FK_5c15451ee870cfe7294ee1b5946`(`unitId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offer` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `photo` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65,30) NOT NULL,
    `createDate` DATETIME(3) NOT NULL,
    `blockDate` DATETIME(3) NOT NULL,
    `cookingTimeMinutes` VARCHAR(191) NOT NULL,
    `status` ENUM('STATUS1', 'STATUS2') NOT NULL,
    `contractorId` INT,
    `cuisineId` INT,
    `dishTypeId` INT,
INDEX `FK_5a75f78777821450734ef5a8691`(`cuisineId`),
INDEX `FK_6136ec9469fdd2bfc0806e8ff57`(`dishTypeId`),
INDEX `FK_8f6a39a4bc98664496290a0254c`(`contractorId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offerIngredient` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `amount` DECIMAL(65,30) NOT NULL,
    `offerId` INT,
    `ingredientId` INT,
INDEX `FK_44e77a8019347fa08d50eb28d5e`(`offerId`),
INDEX `FK_dd2017f8a22a384e8ef5f83d2c8`(`ingredientId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offerReview` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `comment` VARCHAR(191) NOT NULL,
    `vote` ENUM('UP', 'DOWN') NOT NULL,
    `creationDate` DATETIME(3) NOT NULL,
    `status` ENUM('GOOD', 'BAD') NOT NULL,
    `workingConditions` DECIMAL(65,30) NOT NULL,
    `cooperation` DECIMAL(65,30) NOT NULL,
    `asDescribed` DECIMAL(65,30) NOT NULL,
    `reviewerId` INT,
    `offerId` INT,
INDEX `FK_331647d9754a30eb26397aeadcc`(`offerId`),
INDEX `FK_3c295597d7f8056888347d2e828`(`reviewerId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `photo` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65,30) NOT NULL,
    `finishDate` DATETIME(3) NOT NULL,
    `createDate` DATETIME(3) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `cookingTimeMinutes` INT NOT NULL,
    `status` ENUM('STATUS1', 'STATUS2') NOT NULL,
    `principalId` INT,
    `cuisineId` INT,
    `dishTypeId` INT,
INDEX `FK_3de05db7cd64890b9f28955205b`(`dishTypeId`),
INDEX `FK_5afe4859073ffb2e2ff263b89c8`(`principalId`),
INDEX `FK_856dbf8d8c552bdbd780d646e0b`(`cuisineId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderIngredient` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `amount` DECIMAL(65,30) NOT NULL,
    `orderId` INT,
    `ingredientId` INT,
INDEX `FK_1b6d440339a46f3bc6cfcdd8a1d`(`ingredientId`),
INDEX `FK_f9bcc9f99cb63203eeafc28a3a0`(`orderId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderReview` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `comment` VARCHAR(191) NOT NULL,
    `vote` ENUM('UP', 'DOWN') NOT NULL,
    `creationDate` DATETIME(3) NOT NULL,
    `status` ENUM('GOOD', 'BAD') NOT NULL,
    `asExcepted` DECIMAL(65,30) NOT NULL,
    `cooperation` DECIMAL(65,30) NOT NULL,
    `executionSpeed` DECIMAL(65,30) NOT NULL,
    `reviewerId` INT,
    `orderId` INT,
INDEX `FK_173970ba4b9a79d05c9f976b07a`(`reviewerId`),
INDEX `FK_d2b82986ad264b7f66d2cc649b6`(`orderId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reason` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `reason` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rejectionReason` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `comment` VARCHAR(191) NOT NULL,
    `rejectionDate` DATETIME(3) NOT NULL,
    `offerId` INT,
    `reasonId` INT,
INDEX `FK_4a7fa434cf9305c108b33b6500d`(`offerId`),
INDEX `FK_e4690d743647ae1931d066a5ccf`(`reasonId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `unit` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modifiedOn` DATETIME(3),
    `firstName` VARCHAR(191),
    `lastName` VARCHAR(191),
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `birthDate` DATETIME(3),
    `country` VARCHAR(191),
    `city` VARCHAR(191),
    `houseApartmentNumber` VARCHAR(191),
    `phone` VARCHAR(191),
    `joinDate` DATETIME(3),
    `avatarUrl` VARCHAR(191),
    `rate` DECIMAL(65,30) NOT NULL DEFAULT 0,
    `votesUp` INT NOT NULL DEFAULT 0,
    `votesDown` INT NOT NULL DEFAULT 0,
    `offersAmount` INT NOT NULL DEFAULT 0,
    `finishedOffersAmount` INT NOT NULL DEFAULT 0,
    `activeOffersAmount` INT NOT NULL DEFAULT 0,
    `ordersAmount` INT NOT NULL DEFAULT 0,
    `finishedOrdersAmount` INT NOT NULL DEFAULT 0,
    `activeOrdersAmount` INT NOT NULL DEFAULT 0,
    `resetPasswordHash` VARCHAR(191),
    `activationHash` VARCHAR(191),
    `isActive` BOOLEAN NOT NULL DEFAULT false,
UNIQUE INDEX `user.email_unique`(`email`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `userAllergy` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdOn` DATETIME(3) NOT NULL,
    `modifiedOn` DATETIME(3),
    `userId` INT,
    `allergyId` INT,
INDEX `FK_24955ded0fe98a0b8e1a5d29f9b`(`allergyId`),
INDEX `FK_6f1c0b114d1e95f22100cd04b3f`(`userId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `blockedUser` ADD FOREIGN KEY (`blockedUserId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `blockedUser` ADD FOREIGN KEY (`blockingUserId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `forbiddenIngredient` ADD FOREIGN KEY (`ingredientId`) REFERENCES `ingredient`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `forbiddenIngredient` ADD FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ingredient` ADD FOREIGN KEY (`unitId`) REFERENCES `unit`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offer` ADD FOREIGN KEY (`contractorId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offer` ADD FOREIGN KEY (`cuisineId`) REFERENCES `cuisine`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offer` ADD FOREIGN KEY (`dishTypeId`) REFERENCES `dishType`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offerIngredient` ADD FOREIGN KEY (`ingredientId`) REFERENCES `ingredient`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offerIngredient` ADD FOREIGN KEY (`offerId`) REFERENCES `offer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offerReview` ADD FOREIGN KEY (`offerId`) REFERENCES `offer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offerReview` ADD FOREIGN KEY (`reviewerId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD FOREIGN KEY (`cuisineId`) REFERENCES `cuisine`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD FOREIGN KEY (`dishTypeId`) REFERENCES `dishType`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD FOREIGN KEY (`principalId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderIngredient` ADD FOREIGN KEY (`ingredientId`) REFERENCES `ingredient`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderIngredient` ADD FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderReview` ADD FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orderReview` ADD FOREIGN KEY (`reviewerId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rejectionReason` ADD FOREIGN KEY (`offerId`) REFERENCES `offer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rejectionReason` ADD FOREIGN KEY (`reasonId`) REFERENCES `reason`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userAllergy` ADD FOREIGN KEY (`allergyId`) REFERENCES `allergy`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userAllergy` ADD FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
