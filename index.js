        function ViewModel() {
            var self = this;
            self.name = 'John Doe';
            self.isTouched = false;
            self.books = [{
                title: 'Hello'
            }, {
                title: 'World'
            }];
            self.GetName = function() {
                return 'Hello <em>' + self.name + '</em>!';
            };
            self.Toggle = function() {
                return !self.isTouched;
            }
        };
        var viewModel = new ViewModel();
        ko.applyBindings(viewModel);