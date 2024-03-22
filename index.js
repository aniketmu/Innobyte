import app from "./app.js"

const port = 4000;

app.listen(port, () => {
    console.log(`It is alive on PORT: ${port}`)
})