"use strict";
exports.__esModule = true;
var config_1 = require("config");
var Datadragon = /** @class */ (function () {
    function Datadragon() {
        console.log("Datadragon api initialized!!");
        this.championEndpoint = config_1["default"].get("datadragon.champion");
        console.log("" + this.championEndpoint);
    }
    Datadragon.prototype.fetchAllChampions = function (limit) {
        if (limit === void 0) { limit = 0; }
        console.log("this.fetchAllChampions called");
    };
    return Datadragon;
}());
var dd = new Datadragon();
dd.fetchAllChampions();
