
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>jQuery Portfolio</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div id="header">
      <div id="menu">
        <h2>jQuery Portfolio</h2>
        <input id="search" type="text" placeholder="search..." style="float:right">
      </div>
    </div>

    <div id="overlay"></div>
    <div id="frame">
      <table id="frame-table">
        <tr>
          <td id="left">
            <img src="left_arrow.png" alt="left" style="width:50px;height:50px;"/>
          </td>
          <td id="right">
            <img src="right_arrow.png" alt="right" style="width:50px;height:50px;"/>
          </td>
        </tr>
      </table>
      <img id="main" src=""  alt=""/>
      <div id="description">
        <p></p>
      </div>
    </div>

    <div id="wrapper">
      <ul id="filter">
        <li class="active">all</li>
        <li>nature</li>
        <li>animals</li>
        <li>beautiful</li>
      </ul>
      <ul id="portfolio">
        <?php include_once("list.html") ?>
      </ul>
    </div>
    <script src="jquery.js"></script>
    <script type="text/javascript" src="jquery-ui.min.js"></script>
    <script src="script.js"></script>
    <script src="filter.js"></script>
  </body>
</html>
