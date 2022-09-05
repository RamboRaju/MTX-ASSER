// get getRelatedListRecords with apex in LWC
//https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_wire_adapters_get_related_list_records
// we can number of related record available for an object
<!-- wireGetRelatedListRecords.html -->
<template>
    <lightning-card title="wireGetRelatedListRecords">
        <template if:true={records}>
            <div class="slds-m-around_medium">
                <template for:each={records} for:item="rec">
                    <p key={rec.fields.Id.value}>
                        {rec.fields.Name.value}
                    </p>
                </template>
            </div>
        </template>
    </lightning-card>
</template>


// wireGetRelatedListRecords.js
import { LightningElement, wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class WireGetRelatedListRecords extends LightningElement {
    error;
    records;
    @wire(getRelatedListRecords, {
        parentRecordId: '001RM000003UNu6YAG',
        relatedListId: 'Contacts',
        fields: ['Contact.Id','Contact.Name']
        where: "{ and: [{ Name: { like: \"Bob%\" }}] }"
    })listInfo({ error, data }) {
        if (data) {
            this.records = data.records;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.records = undefined;
        }
    }
}
