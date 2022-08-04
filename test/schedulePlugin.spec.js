const fastify = require("fastify");
const fastifySchedulePlugin = require("../index");
const { SimpleIntervalJob, Task } = require("toad-scheduler");

describe("schedulePlugin", () => {
  beforeEach(() => {
    jest.useFakeTimers({ legacyFakeTimers: true });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("correctly stops on application close", async () => {
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

    expect(counter).toBe(0);
    jest.advanceTimersByTime(20);
    expect(counter).toBe(2);

    await app.close();

    jest.advanceTimersByTime(20);
    expect(counter).toBe(2);
  });
});
