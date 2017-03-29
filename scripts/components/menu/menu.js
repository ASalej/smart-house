function menu() {
    return {
        templateUrl: 'scripts/components/menu/menu.html',
        scope: {},
        link: (scope) => {
            scope.menuItems = [
                {
                    'itemName': 'Home Page',
                    'isCurrentTab': true
                },
                {
                    'itemName': 'Link1',
                    'isCurrentTab': false
                },
                {
                    'itemName': 'Link2',
                    'isCurrentTab': false
                }
            ]
        }
    }
}

module.exports = menu;