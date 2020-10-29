module.exports = function (app, db) {

    //retrieves ALL questions 
    app.get("/questions", function (req, res) {
        // let randomCategory = Math.floor(Math.random() * category.length);
        db.jeopardize_q.findAll({
            raw: true
        }
            /* FOR RANDOMIZING SELECTION*/
            // {
            //     order: [
            //         //randomly selects column
            //         [db.sequelize.random()]
            //     ]
            // }
        )
            .then(function (result) {
                //create array of six category titles for ease in handlebars
                let categoryData = []
                for (let i = 0; i < 6; i++) {
                    categoryData.push(result[i].category);
                }

                let dataObj = {
                    questions: result,
                    category: categoryData
                };
                // console.log(result[0].category);

                res.render('jeopardyBoard', dataObj);
            });
    });

    // Retrieves user's created question
    app.get("/api/questions/:id", function (req, res) {
        db.jeopardize_q.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (result) {
                res.json(result);
            })
    });

    //Allows user to create question
    app.post("/api/questions", function (req, res) {
        db.jeopardize_q.create(req.body)
            .then(function (result) {
                res.json(result);
            });
    });
}