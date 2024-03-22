import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
  make: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.number()
    .min(1886)
    .max(new Date().getFullYear() + 1)
    .required(),
  miles: Joi.number().required().min(0),
  city: Joi.string().min(2).required(),
  numberOfSeats: Joi.number().required().min(1).max(1000),
  description: Joi.string().min(20).required(),
  features: Joi.array().items(Joi.string()).required(),
  images: Joi.string().required(),
  listerId: Joi.string().required(),
  price: Joi.number().min(0).required(),
  name: Joi.string().required(),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { error, value } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message,
    });
  }

  // deconstruct all the data from the body
  const {
    make,
    model,
    year,
    miles,
    city: city.toLowerCase(),
    numberOfSeats,
    features,
    description,
    images,
    listerId,
    price,
    name,
  } = body;

  const car = await prisma.car.create({
    data: {
      make,
      model,
      year,
      miles,
      city,
      numberOfSeats,
      features,
      description,
      images,
      listerId,
      price,
      name,
    },
  });

  return car;
});
