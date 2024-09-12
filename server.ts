import app from "./src/app";

const startServr = () => {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Listening at port  ${PORT}`);
  });
};

startServr();
