var insert = prompt("Enter a Integer:","");
var count=0;
var prime=[];
for (var i = insert; i >= 2; i--) {
	for(var j = 1; j <= i; j++)
	{
		if(i%j==0)
		{
			count++;
		}
	}
	if(count == 2)
	{
		prime.push(i);
	}
	count =0;
}
alert(prime);