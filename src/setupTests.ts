import { setupServer } from "msw/node";
import { rest } from "msw";
setupServer(
  rest.all("http://localhost:3000/api/*", async (req, res, ctx) => {
    return res(ctx.json({ message: "Mocked!" }));
  })
);
