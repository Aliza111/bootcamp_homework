function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));


function reverse_a_number(num) {
    let reversed_num = 0;
    while (num !== 0) {
      reversed_num = reversed_num * 10 + num % 10;
      num = Math.floor(num / 10);
    }
    return reversed_num;
  }
  const num = 12345;
  console.log("Original number: "+num);
  const result = reverse_a_number(num);
  console.log("Reversed number: "+result);

  // program to count the number of vowels in a string

  function vowel_Count(str)
  { 
  
    return str.replace(/[^aeiou]/g, "").length; 
  }
  
  console.log(vowel_Count("December"));

  