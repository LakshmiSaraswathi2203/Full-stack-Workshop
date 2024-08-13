var my_arr=[12,-45,99,87,85];
for (var i=0;i<my_arr.length;i++)
{
    if(my_arr[i]<0)
    {
        console.log("The first negative number is: ",my_arr[i]);
        break;
    }
}