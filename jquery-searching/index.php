<!DOCTYPE html>
<html>

<head>
    <title>Live Search</title>
    <script src="js/jquery-4.0.0.min.js"></script>
</head>

<body>

    <input type="text" id="search" placeholder="Search here...">
    <div id="result"></div>

    <script>
        $(document).ready(function() {

            $("#search").keyup(function() {
                let query = $(this).val();

                $.ajax({
                    url: "search.php",
                    method: "POST",
                    data: {
                        query: query
                    },
                    success: function(data) {
                        $("#result").html(data);
                    }
                });

            });

        });
    </script>

</body>

</html>