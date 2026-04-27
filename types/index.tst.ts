import fastify, { FastifyInstance, FastifyPluginCallback } from 'fastify'
import { expect } from 'tstyche'

import fastifyScheduleDefault, {
  fastifySchedule as fastifyScheduleNamed
} from '..'
import * as fastifyScheduleStar from '..'
import fastifyScheduleCjsImport = require('..')
const fastifyScheduleCjs = require('./')

const app: FastifyInstance = fastify()
app.register(fastifyScheduleNamed)
app.register(fastifyScheduleDefault)
app.register(fastifyScheduleCjs)
app.register(fastifyScheduleCjsImport.default)
app.register(fastifyScheduleCjsImport.fastifySchedule)
app.register(fastifyScheduleStar.default)
app.register(fastifyScheduleStar.fastifySchedule)

expect(fastifyScheduleNamed).type.toBeAssignableTo<FastifyPluginCallback>()
expect(fastifyScheduleDefault).type.toBeAssignableTo<FastifyPluginCallback>()
expect(
  fastifyScheduleStar.default
).type.toBeAssignableTo<FastifyPluginCallback>()
expect(
  fastifyScheduleStar.fastifySchedule
).type.toBeAssignableTo<FastifyPluginCallback>()
expect(
  fastifyScheduleCjsImport.default
).type.toBeAssignableTo<FastifyPluginCallback>()
expect(
  fastifyScheduleCjsImport.fastifySchedule
).type.toBeAssignableTo<FastifyPluginCallback>()
expect(fastifyScheduleCjs).type.toBe<any>()
