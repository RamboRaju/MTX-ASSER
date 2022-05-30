// We normaly use set of Ids or map to query record using where clouse but we can also use List as well but it only working for Id filter 
    // check the Example
public static List<Task> getTask(List<Case> cases){
        List<Task> taskList = new List<Task>();
        taskList = [
            SELECT 
            Id, Status 
            FROM Task 
            WHERE Status != 'Completed' AND WhatId IN : cases
            WITH SECURITY_ENFORCED
            ];
        return taskList;
          }
