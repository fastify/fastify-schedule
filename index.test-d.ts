import { FastifyInstance, FastifyPluginCallback } from "fastify";
import fastify from "fastify";
import { expectType } from "tsd";

import { fastifySchedulePlugin as fastifySchedulePluginNamed } from "./";
import fastifySchedulePluginDefault from "./";
import * as fastifySchedulePluginStar from "./";
import fastifySchedulePluginCjsImport = require("./");
const fastifySchedulePluginCjs = require("./");

const app: FastifyInstance = fastify();
app.register(fastifySchedulePluginNamed);
app.register(fastifySchedulePluginDefault);
app.register(fastifySchedulePluginCjs);
app.register(fastifySchedulePluginCjsImport.default);
app.register(fastifySchedulePluginCjsImport.fastifySchedulePlugin);
app.register(fastifySchedulePluginStar.default);
app.register(fastifySchedulePluginStar.fastifySchedulePlugin);

expectType<FastifyPluginCallback>(fastifySchedulePluginNamed);
expectType<FastifyPluginCallback>(fastifySchedulePluginDefault);
expectType<FastifyPluginCallback>(fastifySchedulePluginCjsImport.default);
expectType<FastifyPluginCallback>(fastifySchedulePluginCjsImport.fastifySchedulePlugin);
expectType<FastifyPluginCallback>(fastifySchedulePluginStar.default);
expectType<FastifyPluginCallback>(fastifySchedulePluginStar.fastifySchedulePlugin);
expectType<any>(fastifySchedulePluginCjs);
