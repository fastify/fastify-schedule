const { ToadScheduler } = require("toad-scheduler");
const fp = require("fastify-plugin");

function plugin(fastify, opts, next) {
  const scheduler = new ToadScheduler();
  fastify.decorate("scheduler", scheduler);

  fastify.addHook("onClose", (fastify, done) => {
    scheduler.stop();
    done();
  });

  next();
}

const fastifySchedulePlugin = fp(plugin, {
  fastify: "3.x",
  name: "fastify-schedule",
});

module.exports = {
  fastifySchedulePlugin,
};
