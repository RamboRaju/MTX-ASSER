// on click of button log out from Commnuity and redirect to login page


this[NavigationMixin.Navigate]({
            type: 'comm__loginPage',
            attributes: {
                actionName: 'logout'
            }); 
