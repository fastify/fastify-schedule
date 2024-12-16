import fastify, { FastifyInstance, FastifyPluginCallback } from 'fastify'
import { expectType } from 'tsd'

import fastifyScheduleDefault, { fastifySchedule as fastifyScheduleNamed } from '..'
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

expectType<FastifyPluginCallback>(fastifyScheduleNamed)
expectType<FastifyPluginCallback>(fastifyScheduleDefault)
expectType<FastifyPluginCallback>(fastifyScheduleCjsImport.default)
expectType<FastifyPluginCallback>(fastifyScheduleCjsImport.fastifySchedule)
expectType<FastifyPluginCallback>(fastifyScheduleStar.default)
expectType<FastifyPluginCallback>(fastifyScheduleStar.fastifySchedule)
expectType<any>(fastifyScheduleCjs)
