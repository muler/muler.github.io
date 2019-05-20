"use strict";
$(document).ready(function () {
    //var puzzleArea = document.getElementById('puzzlearea');
    var empty_x = 300;
    var empty_y = 300;
    var winner_arrangment = [];
    var divs = $("#puzzlearea").children("div");
    var x_coordinates = new Array();
    var y_coordinates = new Array();
    // initialize each piece
    divs.each(function (i) {
        // calculate x and y for this piece
        var x = ((i % 4) * 100);
        var y = (Math.floor(i / 4) * 100);

        // set basic style and background
        this.className = "puzzlepiece";
        this.style.left = x + 'px';
        this.style.top = y + 'px';
        this.style.backgroundImage = 'url("background.jpg")';
        this.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

        // store x and y for later
        this.x = x;
        this.y = y;
        x_coordinates.push(x);
        y_coordinates.push(y);
        winner_arrangment.push(x, y);
    });

    x_coordinates.push(empty_x);
    y_coordinates.push(empty_y);
    $("#shufflebutton").click(function () {
        $("#puzzlearea>div").bind();
        empty_x = 300;
        empty_y = 300;
        //console.debug(divs.length);
        var arr = divs;
        for (let j, xx, i = arr.length; i; j = parseInt(Math.random() * i), xx = arr[--i], arr[i] = arr[j], arr[j] = xx);
            

        divs = arr; //$.shuffle(divs);
        var counter = 0;
        divs.each(function () {
            // calculate x and y for this piece
            var x = x_coordinates[counter];
            var y = y_coordinates[counter];
            counter++;
            // set basic style and background
            this.className = "puzzlepiece";
            this.style.left = x + 'px';
            this.style.top = y + 'px';
            this.x = x;
            this.y = y;
        });
    });



    $("div>div").click(function () {
        if (is_movable(this))
        {

            var temp_x = this.x;
            var temp_y = this.y;
            this.style.left = empty_x + 'px';
            this.style.top = empty_y + 'px';
            this.x = empty_x;
            this.y = empty_y;
            empty_x = temp_x;
            empty_y = temp_y;
            var move_arrangement = [];
            divs.each(function () {
                move_arrangement.push(this.x, this.y);
            });
            if (JSON.stringify(winner_arrangment) === JSON.stringify(move_arrangement))
            {
                alert("congratulations");
                $("div>div").unbind();
            }
        }
    });

    $("div>div").hover(function () {
        if (is_movable(this))
            $(this).addClass("movablepiece");
    },
            function () {
                $(this).removeClass("movablepiece");
            }
    );

    function is_movable(a) {
        if ((((a.x === empty_x) && (a.y - 100 === empty_y || a.y + 100 === empty_y))) || (((a.y === empty_y) && (a.x - 100 === empty_x || a.x + 100 === empty_x))))
            return true;
        else
            return false;
    }

//    function my_shuffle(arr) {
//        var used_index = [];
//        var new_arr = [];
//
//        for (var i = 0; i < arr.length; i++)
//        {
//            var index = Math.floor(Math.random() * arr.length);
//            if ($.inArray(index, used_index) === -1)
//            {
//                used_index.push(index);
//                new_arr.push(arr[index]);
//            } else
//            {
//                --i;
//            }
//        }
//        return new_arr;
//    }
});