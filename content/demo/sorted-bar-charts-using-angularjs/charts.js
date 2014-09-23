function sort_by_year(data, asc){
    return data.sort(
        function(a,b){
            return asc ? (a.year > b.year) : (b.year > a.year);
        });
}

function sort_by_num_blog(data, asc){
    return data.sort(
        function(a,b){
            return asc ? (a.num_blog - b.num_blog) : (b.num_blog - a.num_blog);
        });
}

function ChartsCtrl($scope) {
    $scope.items = sort_by_num_blog(
        [{year:'2008',num_blog:12},
         {year:'2009',num_blog:20},
         {year:'2010',num_blog:11},
         {year:'2011',num_blog:19},
         {year:'2012',num_blog:16},
         {year:'2013',num_blog:6}]);
    
    $scope.sorted_by = "num_blog";
    $scope.sort_order = "desc";

    $scope.toggle = function(){
        var sort_order = 0;
        var sort_func = sort_by_num_blog;
        if ($scope.sorted_by == "num_blog"){
            $scope.sorted_by = "year";
            sort_func = sort_by_year;
            sort_order = $scope.sort_order == "desc" ? 0 : 1;
        }
        else {
            $scope.sorted_by = "num_blog";
            sort_order = $scope.sort_order == "desc" ? 0 : 1;
            sort_func = sort_by_num_blog;
        }
        $scope.items = sort_func($scope.items, sort_order);
    };

    $scope.toggle_order = function(){
        var sort_func = sort_by_num_blog;
        var sort_order = 0;

        if ($scope.sort_order == "desc"){
            $scope.sort_order = "asc";
            sort_order = 1;
        }
        else {
            $scope.sort_order = "desc";
            sort_order = 0;
        }
        sort_func = $scope.sorted_by == "num_blog" ? sort_by_num_blog : sort_by_year;
        $scope.items = sort_func($scope.items, sort_order);
    };
}