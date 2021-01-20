const { fastifySchedulePlugin } = require("./lib/schedulePlugin");

/**
 * These export configurations enable JS and TS developers
 * to consume fastify-schedule in whatever way best suits their needs.
 * Some examples of supported import syntax includes:
 * - `const fastifySchedulePlugin = require('fastify-schedule')`
 * - `const { fastifySchedulePlugin } = require('fastify-schedule')`
 * - `import * as fastifySchedulePlugin from 'fastify-schedule'`
 * - `import { fastifySchedulePlugin } from 'fastify-schedule'`
 * - `import fastifySchedulePlugin from 'fastify-schedule'`
 */
fastifySchedulePlugin.fastifySchedulePlugin = fastifySchedulePlugin;
fastifySchedulePlugin.default = fastifySchedulePlugin;
module.exports = fastifySchedulePlugin;
