# fastify-schedule

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status](https://github.com/fastify/fastify-schedule/workflows/ci/badge.svg)](https://github.com/fastify/fastify-schedule/actions)
[![Coverage Status](https://coveralls.io/repos/fastify/fastify-schedule/badge.svg?branch=main)](https://coveralls.io/r/fastify/fastify-schedule?branch=main)

Fastify plugin for scheduling periodic jobs. Provides an instance of [toad-scheduler](https://github.com/kibertoad/toad-scheduler) on fastify instance.

## Getting started

First install the package:

```bash
npm i fastify-schedule
```

Next, set up the plugin:

```js
const { fastifySchedulePlugin } = require('fastify-schedule')
const fastify = require('fastify');

fastify.register(fastifySchedulePlugin);
```

From there jobs can be added to scheduler at any point until application is stopped:

```js
const {  SimpleIntervalJob, AsyncTask } = require('toad-scheduler')

const task = new AsyncTask(
    'simple task',
    () => { return db.pollForSomeData().then((result) => { /* continue the promise chain */ }) },
    (err: Error) => { /* handle errors here */ }
)
const job = new SimpleIntervalJob({ seconds: 20, }, task)

fastify.scheduler.addSimpleIntervalJob(job)
```

For more detailed instructions see the [documentation](https://github.com/kibertoad/toad-scheduler) of `toad-scheduler`.

[npm-image]: https://img.shields.io/npm/v/fastify-schedule.svg
[npm-url]: https://npmjs.org/package/fastify-schedule
