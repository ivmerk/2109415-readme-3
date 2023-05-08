import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.postEntity.upsert({
    where: { postId: 1 },
    update: {},
    create: {
      postType: 'link',
      userId: '11',
      comments: {
        create: [
          {
            message: 'Вау! Отличный ноутбук.',
            userId: '14',
          }
        ]
      },
      favorite: {
        create: []
      }
    }
  });
  await prisma.postEntity.upsert({
    where: { postId: 3 },
    update: {},
    create: {
      postType: 'video',
      userId: '11',
      comments: {
        create: [
          {
            message: 'Вау! Отличный ноутбук.',
            userId: '14',
          },
          {
            message: 'Вау! Отличный ноутбук.',
            userId: '16',
          },
        ]
      },
      favorite: {
        create: []
      }
    }
  });
  console.info('🤘️ Database was filled')
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })
