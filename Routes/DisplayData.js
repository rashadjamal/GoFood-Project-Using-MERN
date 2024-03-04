const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        // Check if both global.sample and global.foodcate are defined
        if (global.sample && global.foodcate) {
            const responseData = {
                sample: global.sample,
                foodcate: global.foodcate
            };
            res.send(responseData);
        } else {
            res.status(404).send("Data not found");
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
