/**
 * Константы для плагина сброса лишнего груза
 */

var DropDialogs = {
    "start": {
        icon: "",
        exit: false,
        title: "Слишком много груза",
        desc_action: function (world) {
            var desc = "Караван перегружен и не может двигаться";
            addLogMessage(world, Goodness.negative, desc);
            return desc;
        },
        choices: [
            {
                text: "Сбросить 100 единиц груза",
                action: function (world) {
                    world.cargo = Math.max(0, world.cargo - 100);
                    var next = hasCaravanOverweight(world) ? "drop" : "ok";
                    return next;
                }
            },
            {
                text: "Сбросить 10 единиц груза",
                action: function (world) {
                    world.cargo = Math.max(0, world.cargo - 10);
                    var next = hasCaravanOverweight(world) ? "drop" : "ok";
                    return next;
                }
            }, {
                text: "Сбросить 10 единиц еды",
                action: function (world) {
                    world.food = Math.max(0, world.food - 10);
                    var next = hasCaravanOverweight(world) ? "drop" : "ok";
                    return next;
                }
            }, {
                text: "Сбросить 1 единицу оружия",
                action: function (world) {
                    world.firepower = Math.max(0, world.firepower - 1);
                    var next = hasCaravanOverweight(world) ? "drop" : "ok";
                    return next;
                }
            }
        ]
    },

    "drop": {
        icon: "",
        exit: false,
        title: "Груза все еще слишком много",
        desc: "Подумайте, от чего можно избавиться.",
        choices: [
            {
                text: "Сбросить 100 единиц груза",
                action: function (world) {
                    world.cargo = Math.max(0, world.cargo - 100);
                    var next = hasCaravanOverweight(world) ? "drop" : "ok";
                    return next;
                }
            },
            {
                text: "Сбросить 10 единиц груза",
                action: function (world) {
                    world.cargo = Math.max(0, world.cargo - 10);
                    var next = hasCaravanOverweight(world) ? "drop" : "ok";
                    return next;
                }
            }, {
                text: "Сбросить 10 единиц еды",
                action: function (world) {
                    world.food = Math.max(0, world.food - 10);
                    var next = hasCaravanOverweight(world) ? "drop" : "ok";
                    return next;
                }
            }, {
                text: "Сбросить 1 единицу оружия",
                action: function (world) {
                    world.firepower = Math.max(0, world.firepower - 1);
                    var next = hasCaravanOverweight(world) ? "drop" : "ok";
                    return next;
                }
            }
        ]
    },

    "ok": {
        icon: "",
        exit: true,
        title: "Караван может двигаться",
        desc_action: function (world) {
            var desc = "Теперь ничто не мешает вашему путешествию. В путь!";
            addLogMessage(world, Goodness.neutral, desc);
            return desc;
        },
        choices: []
    }
};