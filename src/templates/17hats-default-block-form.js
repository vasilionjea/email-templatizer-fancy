(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['17hats-default-block-form'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h3 class=\"text-center block-title\">White Block</h3>\n\n<section class=\"vertical-tabs clearfix\">\n  <aside class=\"vertical-controls\">\n    <a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Pick a background\" href=\"#background\" class=\"active\"><span class=\"glyphicon glyphicon-tint\"></span></a>\n    <a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add text\" href=\"#text\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\n    <a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Create button\" href=\"#button\"><span class=\"glyphicon glyphicon-link\"></span></a>\n    <a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add picture\" href=\"#picture\"><span class=\"glyphicon glyphicon-picture\"></span></a>\n    <a data-toggle=\"tooltip\" data-placement=\"right\" title=\"Add Analytics\" href=\"#analytics\"><span class=\"glyphicon glyphicon-bullhorn\"></span></a>\n  </aside>\n\n  <form role=\"form\">\n    <section class=\"vertical-content\" id=\"background\">\n      <div class=\"page-header\">\n        <h3 class=\"text-center text-thin text-muted\">Pick a background</h3>\n      </div>\n\n      <div class=\"style-radios text-center\">\n        <div class=\"form-group pseudo-radio active\">\n          <label>White<input checked type=\"radio\" name=\"style\" value='{\"background\":\"#ffffff\",\"hcolor\":\"#444444\",\"pcolor\":\"#888888\"}'></label>\n        </div>\n        <div class=\"form-group pseudo-radio\">\n          <label>Light Blue<input type=\"radio\" name=\"style\" value='{\"background\":\"#d8e6ec\",\"hcolor\":\"#444444\",\"pcolor\":\"#888888\"}'></label>\n        </div>\n        <div class=\"form-group pseudo-radio\">\n          <label>Dark Blue<input type=\"radio\" name=\"style\" value='{\"background\":\"#0c6486\",\"hcolor\":\"#ffffff\",\"pcolor\":\"#cccccc\"}'></label>\n        </div>\n        <div class=\"form-group pseudo-radio\">\n          <label>Tan<input type=\"radio\" name=\"style\" value='{\"background\":\"#eeebe3\",\"hcolor\":\"#444444\",\"pcolor\":\"#888888\"}'></label>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"vertical-content\" id=\"text\">\n      <div class=\"page-header\">\n        <h3 class=\"text-center text-thin text-muted\">Add text</h3>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"headline\" class=\"form-control\" placeholder=\"Heading\">\n      </div>\n      <div class=\"form-group\">\n        <textarea name=\"content\" class=\"form-control\" rows=\"6\" placeholder=\"Content\"></textarea>\n      </div>\n    </section>\n\n    <div class=\"vertical-content\" id=\"button\">\n      <div class=\"page-header\">\n        <h3 class=\"text-center text-thin text-muted\">Create a button</h3>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"button_text\" class=\"form-control\" placeholder=\"Button Text\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"button_href\" class=\"form-control\" placeholder=\"Button Link\">\n      </div>\n    </div>\n\n    <div class=\"vertical-content\" id=\"picture\">\n      <div class=\"page-header\">\n        <h3 class=\"text-center text-thin text-muted\">Add a picture</h3>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"image_name\" class=\"form-control\" placeholder=\"Image Filename\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"image_width\" class=\"form-control\" placeholder=\"Image Width\">\n        <small class=\"help-block\">The image size is usually in the filename.</small>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"image_height\" class=\"form-control\" placeholder=\"Image Height\">\n        <small class=\"help-block\">Don't forget to divide by 2 for high DPI images.</small>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"image_alt\" class=\"form-control\" placeholder=\"ALT Text\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"image_src\" class=\"form-control\" placeholder=\"Image Link\">\n      </div>\n    </div>\n\n    <div class=\"vertical-content\" id=\"analytics\">\n      <div class=\"page-header\">\n        <h3 class=\"text-center text-thin text-muted\">Add analytics code</h3>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"ga_source\" class=\"form-control\" placeholder=\"GA Source\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"text\" name=\"ga_campaign\" class=\"form-control\" placeholder=\"GA Campaign\">\n      </div> \n    </div>\n\n    <br><br>\n  </form>\n\n  <div class=\"move-controls\">\n    <a class=\"btn btn-sm btn-info move move-up\"><span class=\"glyphicon glyphicon-chevron-up\" aria-hidden=\"true\"></span> Move Up</a> \n    <a class=\"btn btn-sm btn-info move move-down\"><span class=\"glyphicon glyphicon-chevron-down\" aria-hidden=\"true\"></span> Move Down</a>\n    <a class=\"btn btn-sm btn-danger delete pull-right\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span> Delete</a> \n  </div>\n</section>";
  },"useData":true});
})();