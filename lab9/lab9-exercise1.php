<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear)
// echo "This was output using PHP";
// echo "<br>"; //notice we must echo tags in php.
$date = date("l, F dS, Y H:i:s");
echo "This page was generated: " . $date . "<hr/>";

$year = date("Y");
// 获取该年 2 月的 Unix 时间戳
$time = mktime(0,0,0,2,1,$year);
// 通过判断 2 月的天数确定是否是闰年
$remaining = (date("t", $time)==29 ? 366 : 365) - date("z");
echo "There are ". $remaining . " days left in the year";
?>
</body>
</html>