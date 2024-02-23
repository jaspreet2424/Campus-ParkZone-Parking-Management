const express = require('express');
const { fetchAllStudentsData, deleteSingleUser, getSingleStudent } = require('../Controllers/Guards');
const guardRouter = express.Router();

guardRouter.get('/student-details' , fetchAllStudentsData);
guardRouter.get('/single-student/:studentId' , getSingleStudent);
guardRouter.delete('/delete-student/:id' , deleteSingleUser);

module.exports = guardRouter;