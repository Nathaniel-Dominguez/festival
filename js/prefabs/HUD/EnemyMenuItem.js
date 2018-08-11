// The EnemyMenuItem will be used to select the enmy to be attacked.

var RPG = RPG || {};

RPG.EnemyMenuItem = function (game_state, name, position, properties) {
	"use strict";
	RPG.MenuItem.call(this, game_state, name, position, properties);
};

RPG.EnemyMenuItem.prototype = Object.create(RPG.MenuItem.prototype);
RPG.EnemyMenuItem.prototype.constructor = RPG.EnemyMenuItem;

RPG.EnemyMenuItem.prototype.select = function () {
	"use strict";
	var enemy;

	// Get enemy prefab
	enemy = this.game_state.prefabs[this.text];

	// Attack selected enemy
	this.game_state.current_attack.hit(enemy);

	// Disable menus
	this.game_state.prefabs.enemy_units_menu.disable();
	this.game_state.prefabs.player_units_menu.disable();
};