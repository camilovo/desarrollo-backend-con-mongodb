'use strict'

var express = require('express');
var ProjectContoller = require('../controllers/project');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'});

router.get('/home', ProjectContoller.home);
router.post('/test', ProjectContoller.test);
router.post('/save-project', ProjectContoller.saveProject);
router.get('/project/:id?', ProjectContoller.getProject);
router.get('/projects', ProjectContoller.getProjects);
router.put('/project/:id', ProjectContoller.updateProject);
router.delete('/project/:id', ProjectContoller.deleteProject);
router.post('/upload-image/:id', multipartMiddleware, ProjectContoller.uploadImage);
router.get('/get-image/:image', ProjectContoller.getImageFile);

module.exports = router;