var my_arr=[12,35,66,98,77]
const userInput = parseInt("Enter the element you want to search for..: ");
for(var i=0;i<my_arr.length;i++)
{
    if(my_arr[i]==userInput)
    {
        console.log("The element is present in the array.. at index",i);
    }
}