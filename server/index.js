const app = require('./app');
const port = process.env.PORT || 3009;

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});