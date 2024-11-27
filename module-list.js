(function(){
    var modules={

        "aused-30-extract-form": { url: "$H/m/aused30-extract-form.html", task_name:"Aused 30 mins Drive"},
        "aused-crash-30-form": { url: "$H/m/aused30-crash-time-form.html", task_name:"Aused Crash 30 mins" },
        "aused-60-extract-form": { url: "$H/m/aused60-extract-form.html", task_name:"Aused 60 mins Drive"},
        "aused-crash-60-form": { url: "$H/m/aused60-crash-time-form.html", task_name:"Aused Crash 60 mins" },
        "aused-70-extract-form": { url: "$H/m/aused70-extract-form.html", task_name:"Aused 70 mins Drive"},
        "aused-crash-70-form": { url: "$H/m/aused70-crash-time-form.html", task_name:"Aused Crash 70 mins" },
        "aused-90-extract-form": { url: "$H/m/aused90-extract-form.html", task_name:"Aused 90 mins Drive"},
        "aused-crash-90-form": { url: "$H/m/aused90-crash-time-form.html", task_name:"Aused Crash 90 mins" },
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.hosting_path=$vm.hosting_path.replace('online-questionnaire','')
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.href.indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }

})();
