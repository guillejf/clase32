import express from "express";
import compression from "express-compression";

const app = express();
// app.use(compression());

app.use(
  compression({
    brotli: { enabled: true, zlib: {} },
  })
);

app.listen(8080, console.log("http://localhost:8080"));

app.get("/relargoloqueenvia", (req, res) => {
  let string = "";

  for (let i = 0; i < 10e3; i++) {
    string += `<br>String muuuuy largo`;
  }

  return res.send(string);
});
