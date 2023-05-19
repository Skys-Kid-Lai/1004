<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>Change the fontsize use prime number</title>
</head>
<body>
	<?php
		$dom = rand(2,30);
		echo "隨機亂數：".$dom."<br>質數們：<br>";
		$count = 0;
		for($i = $dom;$i>=2;$i--)
		{
			for($j = 1 ;$j <=$i; $j++)
			{
				if($i % $j ==0)
					$count ++;
			}
			if($count == 2)
			{
				?>
				<p style="font-size:<?php echo $i;?>pt">

				<?php
				echo $i."<br>";
			}
			$count =0;
		}
		$dom = 0;
	?>
</body>
</html>