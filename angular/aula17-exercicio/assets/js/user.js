angular.module('User', ['ngRoute'])
    .config(config)
    .controller('UserController', UserController)
    .controller('UserDetailsController', UserDetailsController)
    .controller('UserGithubController', UserGithubController)
    .controller('UserGithubDetailController', UserGithubDetailController);

function config($routeProvider){
    $routeProvider
        .when('/users',{
            templateUrl: 'views/users-list.html',
            controller: 'UserController',
            controllerAs: 'User'
        })
        .when('/users/github',{
            templateUrl: 'views/users-github.html',
            controller: 'UserGithubController',
            controllerAs: 'UserGithub'
        })
        .when('/users/github/:user',{
            templateUrl: 'views/users-github.html',
            controller: 'UserGithubDetailController',
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

function UserGithubDetailController($http, $routeParams){
    vm = this;
    vm.routeParams = $routeParams;
    const url = 'https://api.github.com/users/'+ vm.routeParams.user;
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

function UserController(){
    var vm = this;
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
    vm.users = [
        {name: 'Suissa', email: 'suissera@manoveio.com', type: 'teacher', active: true}
        , {name: 'João', email: 'joao@macioesedoso.com', type: 'student', active: false}
        , {name: 'Franciele', email: 'fran@quimica.com', type: 'teacher', active: false}
        , {name: 'Maria', email: 'm@gmail.com', type: 'student', active: true}
        , {name: 'José', email: 'js@gmail.com', type: 'student', active: true}
    ];

    function getKeyLength(){
        return Object.keys(angular.copy(vm.users[0])).length;
    }
    vm.keyslength = getKeyLength();

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

    vm.add = add; 
    function add(user){
        vm.users.push(angular.copy(user));
        vm.form = {};
    }

    vm.remove = remove; 
    function remove(users){
        vm.users = users.filter(function(el){
            return !el.selecionado;
        });
    }            

    vm.edit = edit; 
    function edit(user, index){
        vm.form = angular.copy(user);
        vm.form.index = index;
        vm.editing = true;
    }

    vm.save = save;
    function save(user){                
        var users = vm.users.map(function(el, i){
            if(i === user.index){
                delete user.index;
                return user;
            }
            return el;
        });
        vm.users = users;
        vm.editing = false;
        vm.form = {};
    }

    vm.submitForm = submitForm;
    function submitForm(user){
        add(user);
    }         
}

function UserDetailsController($routeParams){
    var vm = this;
    vm.routeParams = $routeParams;    
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
    vm.users = [
        {name: 'Suissa', email: 'suissera@manoveio.com', type: 'teacher', active: true}
        , {name: 'João', email: 'joao@macioesedoso.com', type: 'student', active: false}
        , {name: 'Franciele', email: 'fran@quimica.com', type: 'teacher', active: false}
        , {name: 'Maria', email: 'm@gmail.com', type: 'student', active: true}
        , {name: 'José', email: 'js@gmail.com', type: 'student', active: true}
    ];

    function getKeyLength(){
        return Object.keys(angular.copy(vm.users[0])).length;
    }
    vm.keyslength = getKeyLength();

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

    vm.add = add; 
    function add(user){
        vm.users.push(angular.copy(user));
        vm.form = {};
    }

    vm.remove = remove; 
    function remove(users){
        vm.users = users.filter(function(el){
            return !el.selecionado;
        });
    }            

    vm.edit = edit; 
    function edit(user, index){
        vm.form = angular.copy(user);
        vm.form.index = index;
        vm.editing = true;
    }

    vm.save = save;
    function save(user){                
        var users = vm.users.map(function(el, i){
            if(i === user.index){
                delete user.index;
                return user;
            }
            return el;
        });
        vm.users = users;
        vm.editing = false;
        vm.form = {};
    }

    vm.submitForm = submitForm;
    function submitForm(user){
        add(user);
    }         
}