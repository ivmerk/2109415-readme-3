import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.post.upsert({
    where: { postId: 1 },
    update: {},
    create: {
      type: 'Книги',
      userId: '11',
      comment: {
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
  await prisma.post.upsert({
    where: { postId: 3 },
    update: {},
    create: {
      type: 'Книги',
      userId: '11',
      comment: {
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
