import { fastify, type FastifyInstance } from "fastify";
import { pino } from "pino";

const logger = pino();

const app: FastifyInstance = fastify({
  logger: logger,
});