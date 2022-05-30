// Navigate between steps in Omniscript using LWC

import { LightningElement, api } from 'lwc';
import {OmniscriptBaseMixin} from 'vlocity_ins/omniscriptBaseMixin';
import { getNamespaceDotNotation } from "vlocity_ins/omniscriptInternalUtils";

export default class NavigateBetweenSteps extends OmniscriptBaseMixin(LightningElement) {
    _ns = getNamespaceDotNotation();
    @api stepname = 'Navigate';
    @api jumptostep;

    goto() {
        if(this.jumptostep) {
            this.omniNavigateTo(this.jumptostep);
        }
    }

}

//Meta file must include
//  <runtimeNamespace>vlocity_ins</runtimeNamespace>
//<template> <lightning-button variant="brand" label={stepname} title={stepname} class="slds-align_absolute-center"onclick={goto}></lightning-button></template>
