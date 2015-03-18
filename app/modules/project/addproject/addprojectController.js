'use strict';
define(['app'], function (app) {
	
	var injectParams = ['$scope','$rootScope','$injector', '$routeParams','upload','dataService'];
  // This is controller for this view
	var addprojectController = function ($scope,$rootScope, $injector,$routeParams,upload,dataService) {
		$rootScope.metaTitle = "Real Estate Add Project";
		$scope.alerts = [];
		$scope.project = {};
		$scope.project.overview = {};
		$scope.userinfo = {user_id : $rootScope.userDetails.id};
		console.log($scope.userinfo);
		$scope.project.overview.details = {};
		$scope.project.amenities = {};
		$scope.project.amenities.details = {};
		$scope.project.specification = {};
		$scope.project.specification.details = {};
		$scope.project.location_map = {};
		$scope.project.location_map.details = {};
		$scope.project.layout_map = {};
		$scope.project.layout_map.details = {};
		$scope.project.floor_plan = {};
		$scope.project.floor_plan.details = {};
		$scope.project.project_gallery = {};
		$scope.project.project_gallery.details = {};
		
		$scope.date = dataService.currentDate;
	
		$scope.addToObject = function(data, object){
			object[data.title] = data.description;
		}
		
		$scope.removeObject = function(key, object){
			delete object[key];
		}
		//add project
		$scope.reset = function() {
			$scope.project = {};
		};
		
		// to close alert message
		$scope.closeAlert = function(index) {
			$scope.alerts.splice(index, 1);
		};
		
		//Upload Function for uploading files 
		$scope.project={}; 
		
		
		$scope.path = "project/"; 
		$scope.addimage = {};
		$scope.addimage.title={};
		$scope.alocation_map={};
		$scope.alocation_map.description={};
		$scope.location_map.description.location_image={};
		$scope.addimage.description = {};
		$scope.addimage.description.project_images  = {};
		$scope.upload = function(files,path,userinfo,picArr){//this function for uploading files
			upload.upload(files,path,userinfo,function(response){
				console.log(response);
				var picArrKey = 0, x;
				for(x in picArr) picArrKey++;
				
				if(response.status === 'success'){
					picArr[picArrKey] = (JSON.stringify(response.details));
					console.log(response.message);
					
				}else{
					$scope.alerts.push({type: response.status, msg: response.message});
				}
	
			});
		};
		$scope.generateThumb = function(files){  
			upload.generateThumbs(files);
		};// end file upload code
			
		// for created project date
		$scope.project.created_date=$scope.date;
		$scope.project.user_id= $rootScope.userDetails.id;
		$scope.project.featured = "0";
		//console.log($scope.project.user_id);
		$scope.addproject = function(project){
			
			
			
			
		};
	};	
	 
	// Inject controller's dependencies
	addprojectController.$inject = injectParams;
	// Register/apply controller dynamically
    app.register.controller('addprojectController',addprojectController);
	
	
});




	