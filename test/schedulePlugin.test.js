const fastify = require("fastify");
const fastifySchedulePlugin = require("../index");
const FakeTimers = require("@sinonjs/fake-timers");
const test = require("tap").test;
const { SimpleIntervalJob, Task } = require("toad-scheduler");

test("schedulePlugin correctly stops on application close", async (t) => {
  const clock = FakeTimers.install();

  t.teardown(() => {
    clock.uninstall();
  });

  const app = fastify({ logger: true });
  app.register(fastifySchedulePlugin);
  await app.ready();

  let counter = 0;
  const task = new Task("simple task", () => {
    counter++;
  });
  const job = new SimpleIntervalJob(
    {
      milliseconds: 10,
    },
    task
  );

  app.scheduler.addSimpleIntervalJob(job);

  t.equal(counter, 0);
  clock.tick(20);
  t.equal(counter, 2);

  await app.close();
  clock.tick(20);

  t.equal(counter, 2);
});
