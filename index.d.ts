import { FastifyPluginCallback } from "fastify";
import { ToadScheduler } from "toad-scheduler";

declare module "fastify" {
  interface FastifyInstance {
    scheduler: ToadScheduler;
  }
}

declare const fastifySchedulePlugin: FastifyPluginCallback;

export default fastifySchedulePlugin;
export { fastifySchedulePlugin };
