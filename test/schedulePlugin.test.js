'use strict'

const fastify = require('fastify')
const fastifySchedulePlugin = require('../index')
const { test, mock } = require('node:test')
const { SimpleIntervalJob, Task } = require('toad-scheduler')

test('schedulePlugin correctly stops on application close', async (t) => {
  const clock = mock.timers
  clock.enable(0)

  const app = fastify({ logger: true })
  app.register(fastifySchedulePlugin)
  await app.ready()

  let counter = 0
  const task = new Task('simple task', () => {
    counter++
  })
  const job = new SimpleIntervalJob(
    {
      milliseconds: 10
    },
    task
  )

  app.scheduler.addSimpleIntervalJob(job)

  t.assert.equal(counter, 0)
  clock.tick(20)
  t.assert.equal(counter, 2)

  await app.close()
  clock.tick(20)

  t.assert.equal(counter, 2)
})
