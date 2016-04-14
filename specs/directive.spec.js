describe('directive tests', function(){
  var $rootScope, $compile, $state, $timeout, $location;
  beforeEach(module('app'));
  beforeEach(module('app.views'));
  beforeEach(inject(function(_$rootScope_, _$compile_, _$state_, _$timeout_, _$location_){
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $timeout = _$timeout_;
    $state = _$state_;
    $location = _$location_;
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
      scope.key = {B:[], C: [], D: []};
      var element = $compile(html)(scope);
      scope.$digest();
      var e = angular.element(element.find('div').eq(1));
      expect(e.hasClass('disabled')).toEqual(true);
    });
    it('interact with directive', function(){
      scope.key = {B:[], C: [], D: []};
      var element = $compile(html)(scope);
      scope.$digest();
      var e = angular.element(element.find('div').eq(1));
      e.triggerHandler('click');
      $timeout.flush();
      var link = $state.href('link',{idx: 'A'});
      expect($location.url()).toEqual(link);

    });
  });
});
