const express = require('express');
const { fetchAllStudentsData, deleteSingleUser, getSingleStudent, registerNewGuard, loginGuard, logoutAccount, guardAuthectication, filterStudentsByYear, searchDetails } = require('../Controllers/Guards');
const guardRouter = express.Router();

guardRouter.get('/student-details' , fetchAllStudentsData);
guardRouter.get('/single-student/:studentId' , getSingleStudent);
guardRouter.delete('/delete-student/:id' , deleteSingleUser);
guardRouter.post('/sign-up' , registerNewGuard);
guardRouter.post('/sign-in' , loginGuard);
guardRouter.get('/logout' , logoutAccount);
guardRouter.get('/check-auth' , guardAuthectication);
guardRouter.get('/filter-data/:year' , filterStudentsByYear);
guardRouter.get('/search-data/:text' , searchDetails);

module.exports = guardRouter;