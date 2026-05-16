<?php
$conn = new mysqli("localhost", "root", "", "test");

if (isset($_POST['query'])) {

    $q = $_POST['query'];

    $sql = "SELECT * FROM users WHERE name LIKE '%$q%'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {
            echo "<p>" . $row['name'] . "</p>";
        }
    } else {
        echo "No result found";
    }
}
