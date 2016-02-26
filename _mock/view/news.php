<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>news</title>
</head>
<body>
    <ul>
    <?php
    foreach($list as $value) {
        echo "<li>";
        echo $value['title'];
        echo "</li>";
    }
    ?>
    </ul>
</body>
</html>