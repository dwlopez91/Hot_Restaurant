module.exports = function (app) {}


//GET TABLE

var reservations = [{
        routeName: "yoda",
        name: "Yoda",
        phone: "Jedi Master",
        email: 900,
        unique: 2000
    },
    {
        routeName: "darthmaul",
        name: "Darth Maul",
        phone: "Sith Lord",
        email: 200,
        unique: 1200
    },
    {
        routeName: "obiwankenobi",
        name: "Obi Wan Kenobi",
        phone: "Jedi Master",
        email: 55,
        unique: 1350
    }
];

app.get("/reserve", function (req, res) {
    res.json(reservations);
});