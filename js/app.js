
var app = angular.module('app', []);

var Bulbasaur = new pokemon('Bulbasaur', '001', 49, 45, 49, 65, 65, 45);
var Charmander = new pokemon('Charmander', '004', 39, 52, 43, 60, 50, 65);
var Squirtle = new pokemon('Squirtle', '007', 29, 30, 80, 23, 21, 29);

function ViewCtrl($scope) {
  $scope.chosen = null;
  $scope.pokemons = [Bulbasaur, Charmander, Squirtle];
  $scope.rivalMessage = "";
  $scope.rivalPokemon = null;

    $scope.choosePokemon = function() {
      var message = "Your rival chooses ";

      if ($scope.chosen.id == '001')
      {
        $scope.rivalPokemon = Charmander;
        $scope.rivalMessage = message + $scope.rivalPokemon.name + '!';
      }
      else if ($scope.chosen.id == '004')
      {
        $scope.rivalPokemon = Squirtle;
        $scope.rivalMessage = message + $scope.rivalPokemon.name + '!';
      }
      else
      {
        $scope.rivalPokemon = Bulbasaur;
        $scope.rivalMessage = message + $scope.rivalPokemon.name + '!';
      }
    };

    $scope.choose = function(elem) {
      $scope.chosen = elem.pokemon;
    }
}

function pokemon(name,id,hp,atk,def,spatk,spdef,spd)
{
  this.name = name;
  this.id = id;
  this.hp = [{name: 'Hit Points', value: hp}];
  this.atk = [{name: 'Attack', value: atk}];
  this.def = [{name: 'Defense', value: def}];
  this.spatk = [{name: 'Special Attack', value: spatk}];
  this.spdef = [{name: 'Special Defense', value: spdef}];
  this.spd = [{name: 'Speed', value: spd}];

  this.attributes = [this.hp, this.atk, this.def, this.spatk, this.spdef, this.spd];
}