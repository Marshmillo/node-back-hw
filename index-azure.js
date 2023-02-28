
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('../index.ejs');
})

app.get('/:id', function (req, res) {
  res.send(req.params)
})
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? {'id': name}
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}