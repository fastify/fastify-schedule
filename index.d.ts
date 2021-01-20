import { FastifyPluginCallback } from "fastify";
import { ToadScheduler } from "toad-scheduler";

declare module "fastify" {
  interface FastifyInstance {
    scheduler: ToadScheduler;
  }
}

declare const fastifySchedule: FastifyPluginCallback;

export default fastifySchedule;
export { fastifySchedule };
