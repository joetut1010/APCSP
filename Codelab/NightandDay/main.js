$(document).ready(function () {
    $('#orb').click(function () {
        if ($(this).hasClass('sun')) {
            $(this).removeClass('sun').addClass('moon');
        } else {
            $(this).removeClass('moon').addClass('sun');
        }

        if ($('#sky').hasClass('day')) {
            $('#sky').removeClass('day').addClass('night');
        } else {
            $('#sky').removeClass('night').addClass('day');
        }

        if ($('[id^=moonspot').hasClass('visible')) {
            $('[id^=moonspot').removeClass('visible');
        } else {
            $('[id^=moonspot').addClass('visible');
        }

        if ($('#planet1').hasClass('light')) {
            $('#planet1').removeClass('light').addClass('dark');
        } else {
            $('#planet1').removeClass('dark').addClass('light');
        }

        if ($('#planet2').hasClass('light')) {
            $('#planet2').removeClass('light').addClass('dark');
        } else {
            $('#planet2').removeClass('dark').addClass('light');
        }

        if ($('#planet3').hasClass('light')) {
            $('#planet3').removeClass('light').addClass('dark');
        } else {
            $('#planet3').removeClass('dark').addClass('light');
        }

        if ($('#planet1').hasClass('up')

        ) {
            $('#planet1').removeClass('up').addClass('down');
        } else {
            $('#planet1').removeClass('down').addClass('up');
        }

        if ($('#planet2').hasClass('light')) {
            $('#planet2').removeClass('down').addClass('light');
        } else {
            $('#planet2').removeClass('light').addClass('down');
        }
    });
});
