import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phone: Joi.string().length(10).required(),
  name: Joi.string()
    .pattern(/^[a-zA-Z\s]{3,30}$/)
    .required(),

  message: Joi.string().min(3).max(1000).required(),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { listingId } = event.context.params;

  const { error } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message,
    });
  }

  return prisma.message.create({
    data: {
      email: body.email,
      phone: body.phone,
      name: body.name,
      message: body.message,
      listingId: parseInt(listingId),
    },
  });
});
