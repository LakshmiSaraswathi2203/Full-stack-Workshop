var my_array= ['a','p','p','l','e'];
var vowels_count=0;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]=='a' || my_array[i]=='e' || my_array[i]=='i' || my_array[i]=='o' || my_array[i]=='u' || my_array[i]=='A' || my_array[i]=='E' || my_array[i]=='I' || my_array[i]=='O' || my_array[i]=='U')
    {
        vowels_count+=1;
    }
}
console.log("No.of.vowels:",vowels_count);