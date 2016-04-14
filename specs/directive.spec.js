describe('directive tests', function(){
  var $rootScope, $compile;
  beforeEach(module('app'));
  beforeEach(module('app.views'));
  beforeEach(inject(function(_$rootScope_, _$compile_){
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));
  describe('inline directives', function(){
    var scope, html = '<inline-dir></inline-dir>';
    beforeEach(function(){
      scope = $rootScope.$new();
    });
    it('sanity check', function(){
      expect(1 + 1).toEqual(2);
    });
    it('compiles directive', function(){
        scope.key = 2;
        var element = $compile(html)(scope);
        scope.$digest();
        var e = angular.element(element.children()[1]);
        expect(e.hasClass('active')).toEqual(true);

    });
  });
  describe('template directive', function(){
    var scope, html = '<template-dir></template-dir>';
    beforeEach(function(){
      scope = $rootScope.$new();
    });
    it('compiles directive', function(){
      scope.key = {A:true, B:false, C: false, D: false};
      var element = $compile(html)(scope);
      scope.$digest();
      var e = angular.element(element.children()[0]);
      expect(e.hasClass('active')).toEqual(true);
      console.log(element);
    });
  });
});
