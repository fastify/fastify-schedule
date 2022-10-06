# @fastify/schedule

![CI](https://github.com/fastify/fastify-schedule/workflows/CI/badge.svg)
[![NPM version](https://img.shields.io/npm/v/@fastify/schedule.svg?style=flat)](https://www.npmjs.com/package/@fastify/schedule)
[![NPM downloads](https://img.shields.io/npm/dm/@fastify/schedule.svg?style=flat)](https://www.npmjs.com/package/@fastify/schedule)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://standardjs.com/)

Fastify plugin for scheduling periodic jobs. Provides an instance of [toad-scheduler](https://github.com/kibertoad/toad-scheduler) on fastify instance.  
Jobs are stopped automatically when the fastify instance is stopped.

## Getting started

First install the package:

```bash
npm i @fastify/schedule toad-scheduler
```

Next, set up the plugin:

```js
const fastify = require('fastify')();
const { fastifySchedulePlugin } = require('@fastify/schedule');
const { SimpleIntervalJob, AsyncTask } = require('toad-scheduler');

const task = new AsyncTask(
    'simple task',
    () => { return db.pollForSomeData().then((result) => { /* continue the promise chain */ }) },
    (err) => { /* handle errors here */ }
)
const job = new SimpleIntervalJob({ seconds: 20, }, task)

fastify.register(fastifySchedulePlugin);

// `fastify.scheduler` becomes available after initialization.
// Therefore, you need to call `ready` method.
fastify.ready().then(() => {
    fastify.scheduler.addSimpleIntervalJob(job)
})
```

For more detailed instructions, see the [documentation](https://github.com/kibertoad/toad-scheduler) of `toad-scheduler`.
