const express = require("express");
const exec = require("child_process").exec;

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const command =
        "fortune -o | cowsay -f $(ls /usr/share/cowsay/cows/ | shuf -n 1)";
    exec(command, function(error, stdout, stderr) {
        console.log(stdout);
        res.render("index", { cowsay: stdout });
    });
});

app.listen(port, () =>
    console.log(`Pepper cowsay is listening on port ${port}!`)
);
