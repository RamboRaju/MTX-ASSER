// utill method to share custom object in apex 
public static SObject shareRecord(String shareObjectName, Id parentId, Id userOrGroupId, String accessLevel) {
        if(shareObjectName == 'AccountShare') {
        Schema.SObjectType shareSobjectType = Schema.getGlobalDescribe().get(shareObjectName);
        SObject shareSobject = shareSobjectType.newSObject();
        shareSobject.put('ParentId', parentId);
        shareSobject.put('AccessLevel', accessLevel);
        shareSobject.put('UserOrGroupId', userOrGroupId);
        shareSobject.put('RowCause', 'Manual');
        return  shareSobject;
    }
              // Example shareRecord('CustomObject__c', 'ParentId', 'UserId', 'Edit');
