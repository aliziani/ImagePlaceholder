function ImgPlaceholder($compile, ImgPlhdrCst){
  return {
        restrict: 'A',
        scope: {
			       config: '=imagePlaceholder'
		    },
        link: function (scope, element, attrs) {
            // hide current image
            element[0].style.display = 'none';
            // init configuration
            var config = scope.config || ImgPlhdrCst;
            // Add spinner next to the image
            angular
              .element(element[0])
              .after
              (
                    $compile
                    (
                      [
                        "<img data-ng-src='"+config.loading.imageUrl+"' ",
                        "     style='"+config.loading.style+"'",
                        "     class='"+config.loading.class+"' />"
                      ].join('')
                    )(scope)
              );
            // If image loaded, display it and remove the spinner
            element[0].addEventListener('load', function () {
                element[0].style.display = 'inline';
                element.next().remove();
            });
        }
      }
}

angular
  .module('imagePlaceholder')
  .directive('imagePlaceholder', ImgPlaceholder);
