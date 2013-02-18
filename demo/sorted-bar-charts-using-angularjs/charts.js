
function sort_by_name(data, asc){
    return data.sort(
        function(a,b){
            return asc ? (a.name > b.name) : (b.name > a.name);
        });
}

function sort_by_price(data, asc){
    return data.sort(
        function(a,b){
            return asc ? (a.price - b.price) : (b.price - a.price);    
        });
}

function ChartsCtrl($scope) {
    $scope.items = sort_by_price(
        [{name:'Idli', price:18},
         {name:'Rava dosa', price:30},
         {name:'Roti dal', price:27},
         {name:'Cofee', price:12},
         {name:'Curd rice', price:22},
         {name:'Fried rice', price:50},
         {name:'Vada', price:15}
        ]);
    
    $scope.sorted_by = "price";
    $scope.sort_order = "desc";

    $scope.toggle = function(){
        var sort_order = 0;
        if ($scope.sorted_by == "price"){
            $scope.sorted_by = "name";
            sort_order = $scope.sort_order == "desc" ? 0 : 1;
            $scope.items = sort_by_name($scope.items, sort_order);                        
        }
        else {
            $scope.sorted_by = "price";
            sort_order = $scope.sort_order == "desc" ? 0 : 1;
            $scope.items = sort_by_price($scope.items, sort_order);            
        }
    };

    $scope.toggle_order = function(){
        var sort_func = sort_by_price;
        if ($scope.sort_order == "desc"){
            $scope.sort_order = "asc";
            sort_func = $scope.sorted_by == "price" ? sort_by_price : sort_by_name;
            $scope.items = sort_func($scope.items, 1);
        }
        else {
            $scope.sort_order = "desc";
            sort_func = $scope.sorted_by == "price" ? sort_by_price : sort_by_name;
            $scope.items = sort_func($scope.items, 0);
        }
    };
}