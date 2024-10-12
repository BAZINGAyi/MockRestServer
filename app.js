const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models'); // Ensure you have a database configuration
const apiRoutes = require('./routes/apiRoutes');
const apiPropertyRoutes = require('./routes/apiPropertyRoutes');
const dynamicRoutes = require('./routes/dynamicRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const path = require('path');

const app = express();
// match frontend
// Serve static files from the frontend directory
app.use('/static', express.static(path.join(__dirname, 'public_static')));
// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_static', 'index.html'));
  });
// route to vue router
app.get('/p_*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_static', 'index.html'));
});

// service api
app.use(bodyParser.json());
app.use('/i_api', apiRoutes);
app.use('/i_api', apiPropertyRoutes);
app.use(dynamicRoutes)
app.use(errorMiddleware);

sequelize.sync()
    .then(() => {
        console.log('Database synchronized');
        app.listen(3000, () => {
            console.log('Server is running on port: 3000');
        });
    })
    .catch(err => console.error('Database synchronization failed: ', err));
