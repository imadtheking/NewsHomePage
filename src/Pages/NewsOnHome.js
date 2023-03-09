({
    getNews: function(cmp){
        var action = cmp.get("c.getNews");
        action.setCallback(this, function(response){
          var state = response.getState();
            if (state === "SUCCESS"){
             cmp.set("v.yesterdayNews",response.getReturnValue());   
            }            
        });
        $A.enqueueAction(action);
    }
})
