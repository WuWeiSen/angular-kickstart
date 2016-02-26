<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo $title; ?></title>
</head>
<body>
    <?php echo $content; ?>
    <hr>
    <ul>
    <?php
    foreach($list as $value) {
        echo "<li>";
        echo $value;
        echo "</li>";
    }
    ?>
    </ul>
    
    GET参数 id 是：<?php echo $GET['id']; ?>
    <br>
    <a href="/render/?id=2">/render/?id=2</a>
    <br>
    当前页面地址是：<?php echo $PAGE_PATH; ?>
    <br>
    页面打开方式是：<?php echo $METHOD; ?>
</body>
</html>