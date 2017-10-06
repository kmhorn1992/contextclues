var squad = ['Erica', 'Kirsten', 'Tyfanni', 'Maria', 'Ashley'];
var places = ['iLab', 'kitchen', 'restroom', 'parking lot', 'trap house', 'backyard', 'gazebo', 'playground', 'pool', 'Chuckie Cheese'];
var weapons = ['hatchet', 'furby', 'gameboy', 'knife', 'Donald Trump Toupee', 'grenade', 'grass', 'finger nail', 'christmas tree', 'screwdriver', 'chainsaw', 'pencil', 'scissors', 'jeep', 'Bratz doll', 'hammer', 'tear gas', 'taser', 'brass knuckes', 'machine gun'];
var roomCounter  = 0;

$(document).ready(function () {


    for (k = 0; k < 100; k++) {
        roomCounter++;
        var createAccusation = $(`<h3 id='${roomCounter}'>Accusation ${roomCounter}</h3>`).appendTo('body');

        var random = {
            lFriend: squad[Math.floor((Math.random() * squad.length) + 0)],
            lLocations: places[Math.floor((Math.random() * places.length) + 0)],
            lWeapon: weapons[Math.floor((Math.random() * weapons.length) + 0)]
        }

        createAccusation.click(murder.bind(random))

    }

    function murder() {
        alert(`I accuse ${this.lFriend}, with the ${this.lWeapon} in the ${this.lLocations}`)
    }

});

