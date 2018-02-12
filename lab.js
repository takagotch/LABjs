<script type="text/javascript" src="./script00.js"></script>
<script type="text/javascript" src="./script01.js"></script>
<script type="text/javascript" src="./script02.js"></script>
<script type="text/javascript" src="./script03.js"></script>
<script type="text/javascript" src="./script04.js"></script>

//
<script type="text/javascript" src="./LAB.js"></script>
<script>
  $LAB.script("./script00.js").script("./script01.js")
  .script("./script02").script("./script03.js")
  .script("./script04.js")
  .wait(function(){
    log("Loaded!");
  });
</script>

//
<script type="text/javascript" src="LAB.js"></script>
<script type="text/javascript" src="fLAB.js"></scirpt>

