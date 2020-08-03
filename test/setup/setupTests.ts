const port = '5000' + Number(process.env.JEST_WORKER_ID);
process.env.PORT = process.env.PORT || port;
