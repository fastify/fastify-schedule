import { FastifyPluginCallback } from 'fastify'
import { ToadScheduler } from 'toad-scheduler'

declare module 'fastify' {
  interface FastifyInstance {
    scheduler: ToadScheduler;
  }
}

type FastifySchedule = FastifyPluginCallback

declare namespace fastifySchedule {
  export const fastifySchedule: FastifySchedule
  export { fastifySchedule as default }
}

declare function fastifySchedule (...params: Parameters<FastifySchedule>): ReturnType<FastifySchedule>
export = fastifySchedule
