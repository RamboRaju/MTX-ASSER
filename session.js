// Save LWC data in OmniSession  we can use following code
let mySaveState = {"injuredPersons":this.selectedPerson, selectedValue : this.selectedValue};
let key = 'InjuredPersons';
let usePubSub = true;
this.omniSaveState(mySaveState, key, usePubSub);
