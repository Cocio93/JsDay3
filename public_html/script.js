$(document).ready(function () {
    //Opgave 1
    $("div").css({"height": 100, "width": 100});
    $("#1").css({"background-color": "blue"});
    $("#2").css({"background-color": "green"});
    $("#3").css({"background-color": "red"});

    $("#1").click(function () {
        $("#1").hide();
    });

    $("#2").hover(
            function () {
                $("#2").css({"border-style": "solid", "border-width": "15px"});
            }, function () {
        $("#2").css({"border-width": "0px"});
    });

    $("#2").click(function () {
        $("#3").css({"font-size": "150%"});
    });

    //Opgave 2
    $("div.opg2").each(function () {
        $(this).click(function () {
            var val = $(this).html();
            var res = val * val;
            $(this).html(res);
        });
    });

    //Opgave 3
    $("li").filter(":odd").each(function () {
        $(this).css({"background-color": "LightGrey"});
    });

    //Opgave 5
    $("form").submit(function () {
        return false;
    });
    $("form").submit(function () {
        $("input").each(function () {
            if ($(this).val() === "") {
                $(this).val("Not filled out");
            }
        });
    });

    $(document).change(function () {
        if (formEmpty()) {
            $('input[type="submit"]').attr('disabled', 'disabled');
        } else {
            $('input[type="submit"]').removeAttr('disabled');
        }
    });

    function formEmpty() {
        var isEmpty = false;
        $("input").each(function () {
            if ($(this).val() === "") {
                isEmpty = true;
            }
        });
        return isEmpty;
    }

    //Opgave 6
    function person(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    var p1 = new person("Hans", "Andersen", 15);
    var p2 = new person("Mads", "Christensen", 27);
    var p3 = new person("Simon", "Juul", 32);
    var personArray = [p1, p2, p3];

    personArray.forEach(function (entry) {
        $("#myTable").append("<tr>" +
                "<th>" + entry.firstname + "</th>" +
                "<th>" + entry.lastname + "</th>" +
                "<th>" + entry.age + "</th>" +
                "</tr>");
    });

    
    $("tr").each(function () {
        $(this).hover(function () {
            $(this).css("backgroundColor", "pink");
        }, function() {
            $(this).css("backgroundColor", "white");
        });
    });
});