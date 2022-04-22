exports.hello = (req, res) => {
  res.send(`Hello ${Date.now()}!`);
});
