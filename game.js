var i=0;
var j=0;
var action;
var n1="";
var n2="";

$(".calculator__keys").click(function(e)
{
  var a = e.target.dataset.action;
  var b = e.target.textContent;
  if(!a)
  {
    var a = e.target.textContent;

    if(j==i||i==0)
    {
      n1=n1+e.target.textContent;
    }





    else if(j==i-1)
    {
      n2=n2+e.target.textContent;
    }
    j++;
    i++;







    if($(".calculator__display").text()=="0")
    {
      $(".calculator__display").text("");

      var b=$(".calculator__display").text();

      $(".calculator__display").text(b+a);

  }

  else if($(".calculator__display").text()!="0")
    {

      var b=$(".calculator__display").text();

      $(".calculator__display").text(b+a);

    }

  }

  else if(b=="=")
  {
     console.log("n1 n2 "+ n1+" "+ n2);

    var num1=Number(n1);
    var num2=Number(n2);

    if(action=="+")
    {
      $(".calculator__display").text(num1+num2);
    }
    if(action=="-")
    {
        $(".calculator__display").text(num1-num2);


    }
    if(action=="*")
    {
        $(".calculator__display").text(num1*num2);
    }
    if(action=="/")
    {
        $(".calculator__display").text(num1/num2);
    }

    setTimeout(function(){ location.reload(); }, 3000);

  }



  else if(b=="AC")
  {
    $(".calculator__display").text("0");
  }






  else
  {
    var a = e.target.textContent;

    action=e.target.textContent;

    var b=$(".calculator__display").text();

    $(".calculator__display").text(b+a);

    i++;

  }






});
