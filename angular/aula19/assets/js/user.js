angular.module('User', ['ngRoute'])
    .config(config)
    .service('UserService', UserService)
    .controller('UserController', ['UserService', UserController])
    .controller('UserCreateController', ['UserService', UserCreateController])
    .controller('UserDetailsController', UserDetailsController)
    .controller('UserGithubController', UserGithubController);

function UserService($http){
    const BASE_URL = 'http://localhost:3000/api/users/';
    this.list = function(){        
        const method = "GET";
        const request = {
            url: BASE_URL,
            method: method
        }
        return $http(request);
    }
    this.remove = function(user){
        const method = "DELETE"
        const request = {
            url: BASE_URL + user._id,
            method: method            
        }
        return $http(request);
    }
    this.create = function(user){
        const method = "POST"
        const request = {
            url: BASE_URL,
            method: method,
            data: user
        }
        return $http(request);
    }
}

function UserCreateController(UserService){
    var vm = this;

    vm.submitForm = submitForm;
    function submitForm(user){
        console.log('sumitForm', user);
        console.log('UserService', UserService);
        
        UserService
        .create(user)
        .success(function(data){
            console.log('Criado: ', data);
            vm.cadastrado = data;
        })
        .error(function(err){
            console.log('Erro: ', err);
        });        
    }
}

function config($routeProvider){
    $routeProvider
        .when('/users',{
            templateUrl: 'views/users-list.html',
            controller: 'UserController',
            controllerAs: 'User'
        })
        .when('/users/create',{
            templateUrl: 'views/users-create.html',
            controller: 'UserCreateController',
            controllerAs: 'User'            
        })
        .when('/users/github',{
            templateUrl: 'views/users-github.html',
            controller: 'UserGithubController',
            controllerAs: 'UserGithub'
        })
        .when('/users/:id',{
            templateUrl: 'views/users-details.html',
            controller: 'UserDetailsController',
            controllerAs: 'UserDetails'
        });
}

function UserGithubController($http){
    vm = this;
    const user = 'GuilhermeSilvaCosta';
    const url = 'https://api.github.com/users/'+user;
    const method = "GET";
    $http({
        url: url,
        method: method
    })
    .success(function(data){
        console.log('Data: ', data);
        vm.user = data;
    })
    .error(function(err){
        console.log('Erro: ', err);
    });
}
UserGithubController.$inject = ['$http'];

function UserController(UserService){
    var vm = this;
    vm.users = [];
    vm.titulo = "Be MEAN Usuários";
    vm.editing = false;
    vm.reverse = false;
    vm.modelOptions = {
        updateOn: 'blur default',
        debounce: {
            default: 1000,
            blur: 0
        }
    }  
    UserService
    .list()
    .success(function(data){
        console.log('Data: ', data);
        vm.users = data;
    })
    .error(function(err){
        console.log('Erro: ', err);
    });

    vm.orderByName = orderByName;
    function orderByName(){
        vm.predicate = 'name';
        vm.reverse = !vm.reverse;
    }

    vm.orderByEmail = orderByEmail;
    function orderByEmail(){
        vm.predicate = 'email';
        vm.reverse = !vm.reverse;
    }

    vm.remove = remove;
    function remove(user){
        const filtraUsuarioRemovido = function(el){ 
            return user._id != el._id; 
        };
        if(confirm('Deseja REALMENTE remover este usuário?')){
            UserService
            .remove(user)
            .success(function(data){
                console.log('Removido: ', data);
                if(data.n == 1)
                    vm.users = vm.users.filter(filtraUsuarioRemovido);
            })
            .error(function(err){
                console.log('Erro: ', err);
            });            
        }
        else alert('UFA ainda bem!');    
    }
            
}
// UserController.$inject = ['$http'];

function UserDetailsController($http, $routeParams){
    var vm = this;
    vm.routeParams = $routeParams;    
    vm.editing = false;
    vm.reverse = false;  
    vm.user = [];

    const url = 'http://localhost:3000/api/users/'+$routeParams.id;
    const method = "GET";
    $http({
        url: url,
        method: method
    })
    .success(function(data){
        console.log('Data: ', data);
        vm.user = data;
    })
    .error(function(err){
        console.log('Erro: ', err);
    });  
}
UserController.$inject = ['$http', '$routeParams'];