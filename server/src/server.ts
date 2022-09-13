import Express from "express";

const app = Express();

app.get("/ola", (request, response) => {
  return response.send("Olá mundo!");
  
});

app.listen(3000);
