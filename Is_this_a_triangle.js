function isTriangle(a,b,c)
{

  return  a < b + c && b < a + c && c < b + a ? true : false; // In this kata instruction we should verify triangle with triangle inequality rule.

}
