function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/member/member.html',
        controller: 'memberCtrl',
        controllerAs: 'memberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    }
}
